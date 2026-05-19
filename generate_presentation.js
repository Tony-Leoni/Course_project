const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');

const slidesConfig = [
    {
        file: '1_Market_Analysis.html',
        tabs: ['market', 'trends', 'geo', 'shadow']
    },
    {
        file: '2_User_Research.html',
        tabs: ['jtbd', 'personas', 'evolution']
    },
    {
        file: '3_Process_Map.html',
        tabs: ['c2c', 'b2b', 'invest']
    },
    {
        file: '4_Economics.html',
        tabs: ['nsm', 'unit', 'tam']
    },
    {
        file: '5_Hypothesis_USP.html',
        tabs: ['hypo', 'usp', 'features']
    },
    {
        file: '6_Roadmap_Effects.html',
        tabs: ['roadmap', 'effects']
    },
    {
        file: '7_Risks.html',
        tabs: [null] // No tabs, just render the main page
    }
];

function getBrowserPath() {
    const paths = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    ];
    for (const p of paths) {
        if (p && fs.existsSync(p)) {
            return p;
        }
    }
    throw new Error('Chrome or Edge was not found on this system.');
}

async function generateCoverPage() {
    const coverHtml = `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>Презентация</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: 'Inter', system-ui, sans-serif;
                background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
                color: #FFFFFF;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                text-align: center;
                box-sizing: border-box;
            }
            .container {
                max-width: 900px;
                padding: 40px;
            }
            .badge {
                background: #3B82F6;
                color: white;
                padding: 8px 20px;
                border-radius: 99px;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.15em;
                margin-bottom: 30px;
                display: inline-block;
            }
            h1 {
                font-size: 46px;
                font-weight: 800;
                margin-bottom: 24px;
                line-height: 1.25;
                background: linear-gradient(to right, #FFFFFF, #E2E8F0);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            p.subtitle {
                font-size: 20px;
                color: #94A3B8;
                margin-bottom: 60px;
                line-height: 1.6;
            }
            .meta {
                display: flex;
                justify-content: space-around;
                width: 100%;
                border-top: 1px solid #334155;
                padding-top: 30px;
                margin-top: 20px;
            }
            .meta-item {
                font-size: 14px;
                color: #64748B;
            }
            .meta-item strong {
                color: #94A3B8;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="badge">Курсовой проект</div>
            <h1>Стратегия развития рынка машино-мест (ММ)</h1>
            <p class="subtitle">Создание ликвидного цифрового рынка сделок купли-продажи на платформе ДомКлик</p>
            <div class="meta">
                <div class="meta-item">Продукт: <strong>ДомКлик ММ (Вторичный рынок)</strong></div>
                <div class="meta-item">Автор: <strong>Антон</strong></div>
                <div class="meta-item">Год: <strong>2026</strong></div>
            </div>
        </div>
    </body>
    </html>
    `;
    const coverPath = path.join(__dirname, 'temp_cover.html');
    fs.writeFileSync(coverPath, coverHtml, 'utf8');
    return coverPath;
}

async function run() {
    const browserPath = getBrowserPath();
    console.log(`Using browser: ${browserPath}`);

    const browser = await puppeteer.launch({
        executablePath: browserPath,
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    });

    const page = await browser.newPage();
    // A4 Landscape aspect ratio matches 1125x794 viewport perfectly
    await page.setViewport({ width: 1125, height: 794 });

    const tempPdfFiles = [];

    // 1. Generate and Render Cover Page
    console.log('Generating cover page...');
    const coverPath = await generateCoverPage();
    await page.goto(`file://${coverPath}`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    
    const coverPdfPath = path.join(__dirname, 'temp_cover.pdf');
    await page.pdf({
        path: coverPdfPath,
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }
    });
    tempPdfFiles.push(coverPdfPath);

    // 2. Render each HTML file and tab
    for (const config of slidesConfig) {
        const filePath = path.resolve(__dirname, config.file);
        if (!fs.existsSync(filePath)) {
            console.error(`File not found: ${filePath}`);
            continue;
        }

        const fileUrl = `file://${filePath}`;

        for (const tab of config.tabs) {
            console.log(`Processing ${config.file}${tab ? ` [Tab: ${tab}]` : ''}...`);
            await page.goto(fileUrl, { waitUntil: 'networkidle0' });
            
            // Wait for Web Fonts (Inter, etc.) to load completely
            await page.evaluate(() => document.fonts.ready);

            // Configure layout for printing
            await page.evaluate((tabName) => {
                // Remove sidebar completely
                const sidebar = document.querySelector('.sidebar');
                if (sidebar) sidebar.style.setProperty('display', 'none', 'important');

                // Adjust main content for presentation style
                const main = document.querySelector('.main');
                if (main) {
                    main.style.setProperty('margin-left', '0', 'important');
                    main.style.setProperty('padding', '25px 40px', 'important');
                    main.style.setProperty('max-width', '100%', 'important');
                    main.style.setProperty('width', '100%', 'important');
                    main.style.setProperty('box-sizing', 'border-box', 'important');
                }

                // Make background solid white
                document.body.style.setProperty('background', '#FFFFFF', 'important');

                // Disable animations, prevent card splitting, and prevent wrapping on values/badges
                const disableAnim = document.createElement('style');
                disableAnim.innerHTML = `
                    * {
                        animation: none !important;
                        transition: none !important;
                        transition-duration: 0s !important;
                        animation-duration: 0s !important;
                    }
                    .section {
                        margin-bottom: 0 !important;
                    }
                    /* Prevent page breaking inside key blocks */
                    .card, .block, .tbl-container, .matrix-card, .highlight-box, .insight, .cjm-step {
                        break-inside: avoid !important;
                        page-break-inside: avoid !important;
                    }
                    /* Prevent line wraps inside value elements and badges */
                    .value, .v, .trend, .badge {
                        white-space: nowrap !important;
                    }
                    /* Adjust CJM rows to fit on a single landscape page width */
                    .cjm-row {
                        flex-wrap: nowrap !important;
                        overflow: visible !important;
                        justify-content: space-between !important;
                    }
                    .cjm-step {
                        min-width: 170px !important;
                        flex: 1 !important;
                    }
                `;
                document.head.appendChild(disableAnim);

                // Show all simulator answers in User Research, hide the toggle buttons
                document.querySelectorAll('.a-box').forEach(el => el.style.setProperty('display', 'block', 'important'));
                document.querySelectorAll('.btn-show').forEach(el => el.style.setProperty('display', 'none', 'important'));

                // Traversal helper to replace regular spaces with non-breaking spaces for units/numbers
                function replaceWithNonBreaking(node) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        let text = node.nodeValue;
                        
                        // Numbers + units (e.g., "1.5 млн", "450 млрд", "14 900", "79%", "34 года", "164 дня", "20 минут", "1:4")
                        text = text.replace(/(\d+(?:\.\d+)?)\s+(млн|млрд|руб|₽|%|года|лет|дней|дня|минут|мин|шт|активных|ед)/gi, '$1\u00A0$2');
                        
                        // Words like млн/млрд + currency symbol
                        text = text.replace(/(млн|млрд)\s+(₽|руб)/gi, '$1\u00A0$2');
                        
                        // Ranges, math operators and ratios (e.g., "1.5 - 3.5", "> 85%", "~ 450")
                        text = text.replace(/(\d+(?:\.\d+)?)\s*([-–—:])\s*(\d+(?:\.\d+)?)/g, '$1\u00A0$2\u00A0$3');
                        text = text.replace(/([><≥≤~])\s+(\d+)/g, '$1\u00A0$2');
                        
                        if (text !== node.nodeValue) {
                            node.nodeValue = text;
                        }
                    } else {
                        for (let child of node.childNodes) {
                            if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE') {
                                replaceWithNonBreaking(child);
                            }
                        }
                    }
                }
                replaceWithNonBreaking(document.body);

                // Handle tabs if applicable
                if (tabName) {
                    // Hide all sections first
                    document.querySelectorAll('.section').forEach(s => {
                        s.style.setProperty('display', 'none', 'important');
                        s.classList.remove('active');
                    });

                    // Show target section
                    const target = document.getElementById('section-' + tabName);
                    if (target) {
                        target.style.setProperty('display', 'block', 'important');
                        target.classList.add('active');
                    }
                }
            }, tab);

            // Generate temporary PDF slide
            const tempSlidePath = path.join(__dirname, `temp_slide_${config.file.replace('.html', '')}_${tab || 'main'}.pdf`);
            await page.pdf({
                path: tempSlidePath,
                format: 'A4',
                landscape: true,
                printBackground: true,
                margin: { top: '10mm', right: '15mm', bottom: '18mm', left: '15mm' } // Leaves room for footers
            });

            tempPdfFiles.push(tempSlidePath);
        }
    }

    await browser.close();

    // 3. Merge PDFs and draw professional footers
    console.log('Merging slides and applying footers...');
    const mergedPdf = await PDFDocument.create();
    mergedPdf.registerFontkit(fontkit);

    // Load custom Cyrillic font from Windows to support Russian text footers
    let customFont;
    try {
        const fontPaths = [
            'C:\\Windows\\Fonts\\arial.ttf',
            'C:\\Windows\\Fonts\\calibri.ttf',
            'C:\\Windows\\Fonts\\seguiemj.ttf'
        ];
        let fontBytes;
        for (const fp of fontPaths) {
            if (fs.existsSync(fp)) {
                fontBytes = fs.readFileSync(fp);
                break;
            }
        }
        if (fontBytes) {
            customFont = await mergedPdf.embedFont(fontBytes);
            console.log('Loaded system font for Cyrillic footer.');
        } else {
            customFont = await mergedPdf.embedFont(StandardFonts.Helvetica);
            console.warn('System font not found. Falling back to Helvetica.');
        }
    } catch (e) {
        console.warn('Could not embed custom font, falling back to Helvetica:', e);
        customFont = await mergedPdf.embedFont(StandardFonts.Helvetica);
    }

    const totalFiles = tempPdfFiles.length;

    // Load first PDF (cover page) and copy it
    const coverBytes = fs.readFileSync(tempPdfFiles[0]);
    const coverDoc = await PDFDocument.load(coverBytes);
    const coverPages = await mergedPdf.copyPages(coverDoc, [0]);
    mergedPdf.addPage(coverPages[0]);
    // Note: Cover page gets no footers

    // Copy remaining slides and draw slide footers
    for (let i = 1; i < totalFiles; i++) {
        const fileBytes = fs.readFileSync(tempPdfFiles[i]);
        const doc = await PDFDocument.load(fileBytes);
        const pages = await mergedPdf.copyPages(doc, doc.getPageIndices());

        for (const page of pages) {
            const { width, height } = page.getSize();
            mergedPdf.addPage(page);

            const pageIndex = mergedPdf.getPageCount() - 1; // 1-based index is pageIndex (since cover is 0)
            
            const isCyrillic = customFont.name !== 'Helvetica';
            const footerTextLeft = isCyrillic 
                ? 'ДомКлик — Стратегия развития рынка машино-мест (ММ)' 
                : 'DomClick - MM Market Strategy';
            const footerTextRight = isCyrillic 
                ? `Слайд ${pageIndex} из ${totalFiles - 1}` // totalFiles - 1 because cover doesn't count
                : `Slide ${pageIndex} of ${totalFiles - 1}`;

            // Draw line separator for footer
            page.drawLine({
                start: { x: 40, y: 35 },
                end: { x: width - 40, y: 35 },
                thickness: 0.5,
                color: rgb(0.89, 0.91, 0.94) // Slate 200
            });

            // Draw Document Title on left
            page.drawText(footerTextLeft, {
                x: 40,
                y: 20,
                size: 8,
                font: customFont,
                color: rgb(0.58, 0.64, 0.72) // Slate 400
            });

            // Draw Page Number on right
            const textWidth = customFont.widthOfTextAtSize(footerTextRight, 8);
            page.drawText(footerTextRight, {
                x: width - 40 - textWidth,
                y: 20,
                size: 8,
                font: customFont,
                color: rgb(0.58, 0.64, 0.72) // Slate 400
            });
        }
    }

    // Save final merged presentation
    const finalPdfBytes = await mergedPdf.save();
    const outputPath = path.join(__dirname, 'Presentation.pdf');
    fs.writeFileSync(outputPath, finalPdfBytes);
    console.log(`\nSuccess! Created final presentation: ${outputPath}`);

    // Cleanup temp files
    console.log('Cleaning up temporary files...');
    if (fs.existsSync(coverPath)) fs.unlinkSync(coverPath);
    for (const f of tempPdfFiles) {
        if (fs.existsSync(f)) fs.unlinkSync(f);
    }
    console.log('Cleanup finished.');
}

run().catch(err => {
    console.error('Error running PDF generator:', err);
    process.exit(1);
});
