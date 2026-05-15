# Claude Code on Windows: 3 install methods that actually work in 2026

Claude Code is Anthropic's terminal client. Free. Runs on your machine, works with your files.

Most guides online are for macOS and Linux. Under Windows — confusion: WSL, Git Bash, PowerShell. I've installed Claude Code on three Windows machines — I'll tell you what really works.

After installation you can run ready-made skills (including my 21 AI agents for marketing in natalia-marketing-department).

---

## What you need before installation

1. **Windows 10 or 11** — haven't tested on 7-8, probably won't work
2. **Anthropic API key** — get one at console.anthropic.com, $5 starter deposit covers 100+ tasks
3. **Node.js 18+** — needed for Claude Code CLI
4. **30 minutes** for first run

---

## Method 1 — Native Windows (recommended)

Since spring 2026, Anthropic released a native Windows installer. Used to require WSL — now works directly in PowerShell.

### Step 1 — install Node.js

Download from [nodejs.org](https://nodejs.org) **LTS version** (at the time of writing — Node 22). Run the installer. All defaults.

Verify after install:

```powershell
node --version
npm --version
```

Should show versions. If not — restart PowerShell.

### Step 2 — install Claude Code

Open PowerShell **as administrator** (Win + X → Terminal Admin).

```powershell
npm install -g @anthropic-ai/claude-code
```

Install takes 2-3 minutes. After install:

```powershell
claude --version
```

Should show version (like `0.5.x`).

### Step 3 — set up API key

```powershell
claude auth
```

Browser opens with Anthropic auth. Log in to your account → click "Authorize". Done, key is bound.

Alternative — set key via environment variable:

```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "sk-ant-api03-...", "User")
```

### Step 4 — run Claude Code

```powershell
cd C:\path\to\project\folder
claude
```

Chat opens. Type a task — Claude responds. Done.

---

## Method 2 — WSL (if Method 1 doesn't work)

Sometimes Native Windows glitches on older builds of 10. Then — WSL (Windows Subsystem for Linux).

### Step 1 — install WSL

PowerShell as admin:

```powershell
wsl --install
```

Installs Ubuntu by default. Restart computer. Ubuntu opens, asks to create username + password.

### Step 2 — inside Ubuntu install Node

```bash
sudo apt update
sudo apt install nodejs npm
node --version
```

If version is old (less than 18):

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

### Step 3 — install Claude Code

```bash
sudo npm install -g @anthropic-ai/claude-code
claude auth
```

Same logic, but everything in Linux environment.

### Step 4 — where files live

In WSL your Windows files are accessible via `/mnt/c/`. Example:

```bash
cd /mnt/c/Users/name/projects/my-project
claude
```

---

## Method 3 — Git Bash (if both above don't work)

On very old Windows builds or corporate machines with WSL blocked — via Git Bash.

### Step 1 — install Git Bash

[git-scm.com/download/win](https://git-scm.com/download/win). Defaults.

### Step 2 — install Node via Git Bash

[nodejs.org](https://nodejs.org) → LTS, regular installer.

### Step 3 — Claude Code

In Git Bash:

```bash
npm install -g @anthropic-ai/claude-code
claude auth
```

Slightly slower than native Windows, but stable.

---

## Installing ready-made Skills (e.g., natalia-marketing-department)

Skills are ready-made AI agents that do specific tasks. I have 21 open-source agents for small business marketing.

### Step 1 — clone repo

In PowerShell or WSL:

```powershell
git clone https://github.com/nibrovkina-cyber/natalia-marketing-department.git
cd natalia-marketing-department
```

### Step 2 — copy skills to Claude folder

**In PowerShell (Native Windows):**

```powershell
$src = ".\skills\"
$dst = "$env:USERPROFILE\.claude\skills\"
New-Item -ItemType Directory -Force -Path $dst
Copy-Item -Path "$src*" -Destination $dst -Recurse -Force
```

**In Git Bash or WSL:**

```bash
mkdir -p ~/.claude/skills
cp -r skills/* ~/.claude/skills/
```

### Step 3 — verify Claude sees skills

In Claude Code:

```
/help
```

All 21 commands should appear: `/natalia-positioning`, `/natalia-copy`, `/natalia-landing` etc.

---

## Common errors and solutions

### "claude: command not found"

Problem: Node.js global path not in PATH.

**PowerShell solution:**
```powershell
$env:PATH += ";$env:APPDATA\npm"
```

Or restart PowerShell after npm global install.

### "Permission denied" on npm install -g

Run PowerShell as admin. Or use WSL — there this isn't a problem.

### "Cannot connect to Anthropic API"

Check internet. Antivirus sometimes blocks. Try disabling temporarily.

### "Skills not visible via /help"

1. Check path: `dir $env:USERPROFILE\.claude\skills` — folders `natalia-*` should be there
2. Restart Claude (`exit` → run again)
3. Check that each folder has `SKILL.md` file

### "$0.30 per run — is this normal?"

Depends on task size. For a 1500-word landing with breakdown — $0.50-2 is normal. For a short question — $0.05.

To see spending:

```powershell
claude usage
```

Shows monthly spend.

---

## How much does Claude Code cost monthly

Average task volume for small business marketing — **$5-30 per month** on Anthropic API.

Specific numbers:
- Client brief: $0.30-0.50
- Full landing with breakdown: $1-2
- Welcome sequence of 5 emails: $0.50-1
- 1500-word SEO article: $0.30-0.80

Heavy usage on 2-3 clients — $20-30/month.

For comparison: ChatGPT Plus — $20/month flat. Claude Code is cheaper at small volume and scales linearly.

---

## What to do after installation

1. **Create a client folder** with `brand-memory.json` (address, prices, ICP, what to say and what's forbidden)
2. Run the first skill: `/natalia-positioning` or `/natalia-landing https://client-site.com`
3. Get result in 5-15 minutes
4. Read the [README of natalia-marketing-department](https://github.com/nibrovkina-cyber/natalia-marketing-department) for the full command list

---

## FAQ

**Without VPN from Russia?**
Yes. Anthropic API works from Russia directly. Payment too — Russian cards don't work, but Wise, Paysend, or international cards work.

**How much RAM is needed?**
Min 8 GB. Better 16. Claude Code itself isn't heavy, but WSL + IDE + browser eat memory.

**Works on Mac M1/M2?**
Yes. Native via `npm install -g @anthropic-ai/claude-code`. Same guide as Linux.

**Are natalia-* skills only for marketing?**
Yes. It's a specialized set. For other domains — write your own skills (format is simple) or search GitHub by tag `claude-skills`.

**Can I run Claude Code in background?**
Possible via CI/CD. Anthropic released Claude Code Action for GitHub Actions — runs on push. But for marketing the interactive mode usually suffices.

---

## Download 21 AI marketers after installation

**Open source. MIT. Free.**

https://github.com/nibrovkina-cyber/natalia-marketing-department

Install Claude Code — 10 minutes. Install skills — 5 minutes. First client brief — 15 minutes after start.
