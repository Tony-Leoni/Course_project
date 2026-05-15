"""
Публикует markdown-статью на Telegraph через их HTTP API.
Возвращает URL опубликованной страницы.
Не требует аккаунта.
"""
import json
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path


def md_to_telegraph_nodes(md: str) -> list:
    """Конвертирует markdown в Telegraph DOM-узлы."""
    nodes = []
    lines = md.splitlines()
    i = 0
    in_code = False
    code_buf = []

    while i < len(lines):
        line = lines[i].rstrip()

        # код-блок ```
        if line.startswith("```"):
            if in_code:
                nodes.append({"tag": "pre", "children": ["\n".join(code_buf)]})
                code_buf = []
                in_code = False
            else:
                in_code = True
            i += 1
            continue
        if in_code:
            code_buf.append(line)
            i += 1
            continue

        # пустая строка - skip
        if not line.strip():
            i += 1
            continue

        # горизонтальная линия
        if re.fullmatch(r"-{3,}", line.strip()):
            nodes.append({"tag": "hr"})
            i += 1
            continue

        # заголовки (Telegraph поддерживает h3 и h4)
        m = re.match(r"^(#{1,4})\s+(.+)$", line)
        if m:
            level = len(m.group(1))
            text = m.group(2)
            tag = "h3" if level <= 2 else "h4"
            nodes.append({"tag": tag, "children": parse_inline(text)})
            i += 1
            continue

        # таблица — Telegraph не поддерживает, конвертируем в простой блок
        if "|" in line and i + 1 < len(lines) and re.match(r"^\|?[\s\-:|]+\|?$", lines[i + 1].strip()):
            # пропускаем таблицу — заменяем на параграф-уведомление
            while i < len(lines) and "|" in lines[i]:
                i += 1
            nodes.append({"tag": "p", "children": [{"tag": "em", "children": ["[таблица — см. оригинал]"]}]})
            continue

        # списки
        if re.match(r"^[\-\*]\s+", line):
            list_items = []
            while i < len(lines) and re.match(r"^[\-\*]\s+", lines[i].rstrip()):
                item_text = re.sub(r"^[\-\*]\s+", "", lines[i].rstrip())
                list_items.append({"tag": "li", "children": parse_inline(item_text)})
                i += 1
            nodes.append({"tag": "ul", "children": list_items})
            continue

        if re.match(r"^\d+\.\s+", line):
            list_items = []
            while i < len(lines) and re.match(r"^\d+\.\s+", lines[i].rstrip()):
                item_text = re.sub(r"^\d+\.\s+", "", lines[i].rstrip())
                list_items.append({"tag": "li", "children": parse_inline(item_text)})
                i += 1
            nodes.append({"tag": "ol", "children": list_items})
            continue

        # цитата
        if line.startswith("> "):
            quote_lines = []
            while i < len(lines) and lines[i].startswith("> "):
                quote_lines.append(lines[i][2:])
                i += 1
            nodes.append({"tag": "blockquote", "children": parse_inline(" ".join(quote_lines))})
            continue

        # обычный параграф
        nodes.append({"tag": "p", "children": parse_inline(line)})
        i += 1

    return nodes


def parse_inline(text: str):
    """Простая обработка bold/italic/links в строке. Возвращает список узлов и/или строк."""
    # упрощённо: жирный **text** → <b>, ссылки [text](url) → <a>
    out = []
    pattern = re.compile(r"(\*\*([^\*]+)\*\*|\[([^\]]+)\]\(([^\)]+)\)|`([^`]+)`)")
    pos = 0
    for m in pattern.finditer(text):
        if m.start() > pos:
            out.append(text[pos:m.start()])
        if m.group(1).startswith("**"):
            out.append({"tag": "b", "children": [m.group(2)]})
        elif m.group(1).startswith("["):
            out.append({"tag": "a", "attrs": {"href": m.group(4)}, "children": [m.group(3)]})
        elif m.group(1).startswith("`"):
            out.append({"tag": "code", "children": [m.group(5)]})
        pos = m.end()
    if pos < len(text):
        out.append(text[pos:])
    return out if out else [text]


def telegraph_create_account(short_name: str, author_name: str) -> str:
    data = urllib.parse.urlencode({
        "short_name": short_name,
        "author_name": author_name,
        "author_url": "https://github.com/nibrovkina-cyber/natalia-marketing-department",
    }).encode()
    req = urllib.request.Request("https://api.telegra.ph/createAccount", data=data, method="POST")
    with urllib.request.urlopen(req, timeout=30) as resp:
        result = json.loads(resp.read())
    if not result.get("ok"):
        raise RuntimeError(f"createAccount failed: {result}")
    return result["result"]["access_token"]


def telegraph_create_page(token: str, title: str, author_name: str, content_nodes: list) -> str:
    data = urllib.parse.urlencode({
        "access_token": token,
        "title": title,
        "author_name": author_name,
        "author_url": "https://github.com/nibrovkina-cyber/natalia-marketing-department",
        "content": json.dumps(content_nodes, ensure_ascii=False),
        "return_content": "false",
    }).encode()
    req = urllib.request.Request("https://api.telegra.ph/createPage", data=data, method="POST")
    with urllib.request.urlopen(req, timeout=60) as resp:
        result = json.loads(resp.read())
    if not result.get("ok"):
        raise RuntimeError(f"createPage failed: {result}")
    return result["result"]["url"]


def publish(md_path: str, title: str, author_name: str = "Наталия Бровкина") -> str:
    md = Path(md_path).read_text(encoding="utf-8")
    # Срезаем первый заголовок (H1) если он совпадает с title — не дублируем
    md_lines = md.splitlines()
    if md_lines and md_lines[0].startswith("# "):
        md = "\n".join(md_lines[1:])
    # Срезаем META-блок в конце (служебная информация для редактора)
    md = re.sub(r"\n## META\b.*$", "", md, flags=re.DOTALL)

    nodes = md_to_telegraph_nodes(md)
    token = telegraph_create_account("natashabrovkina", author_name)
    url = telegraph_create_page(token, title, author_name, nodes)
    return url


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: publish-telegraph.py <md-path> <title>")
        sys.exit(1)
    url = publish(sys.argv[1], sys.argv[2])
    print(url)
