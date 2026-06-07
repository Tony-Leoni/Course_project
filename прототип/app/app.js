// App State variables
let state = {
    cadastralNumber: "77:01:0001001:4212",
    price: 1500000,
    commissionSplit: "50-50",
    ownershipYears: 5,
    buyerName: "Петров Алексей Игоревич",
    sellerName: "Лукошина Екатерина Александровна",
    buyerFee: 2950,
    sellerFee: 2950,
    p2pLink: ""
};

// DOM Elements
const screens = {
    selector: document.getElementById('screenSelector'),
    portalHome: document.getElementById('screenPortalHome'),
    portalSearch: document.getElementById('screenPortalSearch'),
    portalListing: document.getElementById('screenPortalListing'),
    sellerInit: document.getElementById('screenSellerInit'),
    linkShare: document.getElementById('screenLinkShare'),
    p2pPreview: document.getElementById('screenP2PPreview'),
    buyerLogin: document.getElementById('screenBuyerLogin'),
    buyerEscrow: document.getElementById('screenBuyerEscrow'),
    signing: document.getElementById('screenSigning'),
    tracker: document.getElementById('screenTracker'),
    myProperties: document.getElementById('screenMyProperties')
};

const steps = {
    1: document.getElementById('step1'),
    2: document.getElementById('step2'),
    3: document.getElementById('step3'),
    4: document.getElementById('step4')
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Add selector-active class to container by default
    document.querySelector('.app-container').classList.add('selector-active');
    
    initSelector();
    initPortalSubheader();
    initScreen1();
    initScreen2();
    initScreen2b(); // P2P Preview screen
    initScreen3();
    initScreen4();
    initScreen5();
    initScreen6();
    initScreen7();
});

// Portal Subheader Nav & Logo Logic
function initPortalSubheader() {
    const navItemHome = document.getElementById('navItemHome');
    const navItemApartment = document.getElementById('navItemApartment');
    const navItemHouse = document.getElementById('navItemHouse');
    const navItemParking = document.getElementById('navItemParking');
    const appLogo = document.getElementById('appLogo');
    const appContainer = document.querySelector('.app-container');

    // Clicking logo resets and returns to scenario selector
    if (appLogo) {
        appLogo.addEventListener('click', () => {
            resetApp();
        });
    }

    if (navItemHome) {
        navItemHome.addEventListener('click', () => {
            appContainer.classList.add('selector-active');
            switchScreen('portalHome', 1);
        });
    }

    if (navItemParking) {
        navItemParking.addEventListener('click', () => {
            appContainer.classList.add('selector-active');
            switchScreen('portalSearch', 1);
        });
    }

    const disabledItems = [navItemApartment, navItemHouse];
    disabledItems.forEach(item => {
        if (item) {
            item.addEventListener('click', () => {
                showToast("В демо-режиме доступен поиск только машино-мест!");
            });
        }
    });
}

// Enhanced Toast Helper with Icon Support
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    
    // Add icon based on type
    let icon = '';
    switch(type) {
        case 'success':
            icon = '✓ ';
            break;
        case 'error':
            icon = '✕ ';
            break;
        case 'info':
            icon = 'ℹ ';
            break;
        default:
            icon = '';
    }
    
    toast.innerHTML = icon + message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0) scale(1)';
    
    // Vibration feedback for mobile
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(100px) scale(0.95)';
    }, 3000);
}

// Update Stepper Visuals
function updateStepper(currentStepIndex, totalSteps = 4) {
    for (let i = 1; i <= totalSteps; i++) {
        const step = steps[i];
        if (i < currentStepIndex) {
            step.className = 'step-indicator completed';
        } else if (i === currentStepIndex) {
            step.className = 'step-indicator active';
        } else {
            step.className = 'step-indicator';
        }
    }
}

// Switch Screens with Enhanced Transition
function switchScreen(targetScreenName, stepIndex) {
    const currentActive = document.querySelector('.screen.active');
    
    // Fade out current screen
    if (currentActive) {
        currentActive.style.opacity = '0';
        currentActive.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            Object.values(screens).forEach(screen => screen.classList.remove('active'));
            screens[targetScreenName].classList.add('active');
            updateStepper(stepIndex);
            
            // Reset style for new screen
            screens[targetScreenName].style.opacity = '';
            screens[targetScreenName].style.transform = '';
        }, 150);
    } else {
        Object.values(screens).forEach(screen => screen.classList.remove('active'));
        screens[targetScreenName].classList.add('active');
        updateStepper(stepIndex);
    }
    
    // Auto Scroll back to top inside the emulator
    setTimeout(() => {
        document.getElementById('appContent').scrollTop = 0;
    }, 200);

    // Toggle Portal Subheader Nav visibility on Portal screens
    const portalSubheaderNav = document.getElementById('portalSubheaderNav');
    if (portalSubheaderNav) {
        if (targetScreenName === 'portalHome' || targetScreenName === 'portalSearch' || targetScreenName === 'portalListing') {
            portalSubheaderNav.style.display = 'block';
            
            // Highlight current active tab
            const navItems = portalSubheaderNav.querySelectorAll('.nav-item');
            navItems.forEach(item => item.classList.remove('active'));
            
            if (targetScreenName === 'portalHome') {
                document.getElementById('navItemHome').classList.add('active');
            } else if (targetScreenName === 'portalSearch') {
                document.getElementById('navItemParking').classList.add('active');
            } else if (targetScreenName === 'portalListing') {
                document.getElementById('navItemParking').classList.add('active');
            }
        } else {
            portalSubheaderNav.style.display = 'none';
        }
    }
}

// ==========================================
// SCENARIO SELECTOR LOGIC
// ==========================================
function initSelector() {
    const btnChooseP2P = document.getElementById('btnChooseP2P');
    const btnChoosePortal = document.getElementById('btnChoosePortal');
    const btnPortalBuy = document.getElementById('btnPortalBuy');
    const btnBackToSelector = document.getElementById('btnBackToSelector');
    const btnCatalogItem1 = document.getElementById('btnCatalogItem1');
    const btnBackToSelectorFromSearch = document.getElementById('btnBackToSelectorFromSearch');
    const btnBackToSelectorFromHome = document.getElementById('btnBackToSelectorFromHome');
    const btnPortalSearchFind = document.getElementById('btnPortalSearchFind');
    const tabCatApartment = document.getElementById('tabCatApartment');
    const tabCatHouse = document.getElementById('tabCatHouse');
    const tabCatParking = document.getElementById('tabCatParking');
    const appContainer = document.querySelector('.app-container');

    btnChooseP2P.addEventListener('click', () => {
        state.activeScenario = 'p2p';
        appContainer.classList.remove('selector-active');
        switchScreen('sellerInit', 1);
    });

    btnChoosePortal.addEventListener('click', () => {
        state.activeScenario = 'portal';
        appContainer.classList.add('selector-active'); // Keep stepper hidden
        switchScreen('portalHome', 1);
    });

    // Portal home category switching logic
    const categoryTabs = [tabCatApartment, tabCatHouse, tabCatParking];
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const selectedTab = e.currentTarget;
            if (selectedTab.id !== 'tabCatParking') {
                showToast("В демо-режиме доступен поиск только машино-мест!");
                return;
            }
            categoryTabs.forEach(t => t.classList.remove('active'));
            selectedTab.classList.add('active');
        });
    });

    btnPortalSearchFind.addEventListener('click', () => {
        appContainer.classList.add('selector-active'); // Keep stepper hidden on search view
        switchScreen('portalSearch', 1);
    });

    btnBackToSelectorFromHome.addEventListener('click', () => {
        appContainer.classList.add('selector-active');
        switchScreen('selector', 1);
    });

    btnCatalogItem1.addEventListener('click', () => {
        appContainer.classList.add('selector-active'); // Keep stepper hidden on listing view
        switchScreen('portalListing', 1);
    });

    btnBackToSelectorFromSearch.addEventListener('click', () => {
        appContainer.classList.add('selector-active');
        switchScreen('portalHome', 1);
    });

    btnBackToSelector.addEventListener('click', () => {
        appContainer.classList.add('selector-active');
        switchScreen('portalSearch', 1);
    });

    btnPortalBuy.addEventListener('click', () => {
        // Portal buy initiates transaction.
        // It bypasses seller setup and goes directly to buyer flow (Sber ID Login)
        appContainer.classList.remove('selector-active'); // Show stepper
        
        // Swap user badge to Buyer
        const userBadge = document.getElementById('userBadge');
        const userBadgeText = document.getElementById('userBadgeText');
        userBadge.style.display = 'flex';
        userBadgeText.textContent = 'Покупатель';

        // Pre-fill buyer details
        state.cadastralNumber = "77:01:0001001:4212";
        state.price = 1500000;
        state.commissionSplit = "50-50"; // default split
        state.buyerFee = 2950;
        state.sellerFee = 2950;

        document.getElementById('buyerCostLabel').textContent = `${new Intl.NumberFormat('ru-RU').format(state.price)} ₽`;
        document.getElementById('buyerFeeLabel').textContent = '2 950 ₽ (50%)';

        switchScreen('buyerLogin', 1);
    });
}

// ==========================================
// SCREEN 1 LOGIC (Seller Init)
// ==========================================
function initScreen1() {
    const priceInput = document.getElementById('priceInput');
    const cadastralInput = document.getElementById('cadastralInput');
    const ownershipSlider = document.getElementById('ownershipSlider');
    const ownershipYearsLabel = document.getElementById('ownershipYearsLabel');
    const btnGenerateLink = document.getElementById('btnGenerateLink');
    const pills = document.querySelectorAll('.pill-option');

    // Handle price manual typing
    priceInput.addEventListener('input', (e) => {
        state.price = parseInt(e.target.value) || 0;
        updateTaxSemaphore();
    });

    // Handle commission splits
    pills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            pills.forEach(p => p.classList.remove('active'));
            const selectedPill = e.currentTarget;
            selectedPill.classList.add('active');
            state.commissionSplit = selectedPill.dataset.split;
            
            // Recalculate fees
            const totalFee = 5900;
            if (state.commissionSplit === '50-50') {
                state.buyerFee = totalFee / 2;
                state.sellerFee = totalFee / 2;
            } else if (state.commissionSplit === 'seller') {
                state.buyerFee = 0;
                state.sellerFee = totalFee;
            } else {
                state.buyerFee = totalFee;
                state.sellerFee = 0;
            }
        });
    });

    // Handle ownership slider
    ownershipSlider.addEventListener('input', (e) => {
        state.ownershipYears = parseInt(e.target.value);
        ownershipYearsLabel.textContent = `${state.ownershipYears} ${getYearWord(state.ownershipYears)}`;
        updateTaxSemaphore();
    });

    function getYearWord(years) {
        if (years === 1) return 'год';
        if (years >= 2 && years <= 4) return 'года';
        return 'лет';
    }

    // Tax Semaphore computation
    function updateTaxSemaphore() {
        const taxSemaphore = document.getElementById('taxSemaphore');
        const taxTitle = document.getElementById('taxTitle');
        const taxDesc = document.getElementById('taxDesc');

        if (state.ownershipYears >= 5) {
            taxSemaphore.className = "tax-semaphore green";
            taxTitle.textContent = "Налог НДФЛ: 0 ₽";
            taxDesc.textContent = "Машино-место в собственности более 5 лет (или от 3 лет при наследстве/дарении). Продавец освобожден от уплаты НДФЛ. Риск занижения цены ДКП исключен.";
        } else {
            const taxAmount = Math.round(state.price * 0.13);
            const formattedTax = new Intl.NumberFormat('ru-RU').format(taxAmount);
            taxSemaphore.className = "tax-semaphore orange";
            taxTitle.textContent = `Налог НДФЛ: ~${formattedTax} ₽ (13%)`;
            taxDesc.textContent = "Срок владения менее 5 лет. Рекомендуем указать полную сумму. Сервис Домклик автоматически удержит налог при выплате из эскроу.";
        }
    }

    // Generate link action
    btnGenerateLink.addEventListener('click', () => {
        state.cadastralNumber = cadastralInput.value.trim() || "77:01:0001001:4212";
        state.price = parseInt(priceInput.value) || 1500000;
        
        // Save state and build links
        const randomId = Math.random().toString(36).substring(2, 8);
        state.p2pLink = `https://domclick.ru/s/p2p-parking-${randomId}`;
        
        // Move to screen 2
        document.getElementById('shareLinkUrl').textContent = state.p2pLink;
        
        // Show Badge
        const userBadge = document.getElementById('userBadge');
        const userBadgeText = document.getElementById('userBadgeText');
        userBadge.style.display = 'flex';
        userBadgeText.textContent = 'Продавец';

        switchScreen('linkShare', 2);
    });
}

// ==========================================
// SCREEN 2 LOGIC (Link Share)
// ==========================================
function initScreen2() {
    const btnCopyLink = document.getElementById('btnCopyLink');
    const chatLinkCard = document.getElementById('chatLinkCard');
    const btnSimulateBuyer = document.getElementById('btnSimulateBuyer');

    btnCopyLink.addEventListener('click', () => {
        // Mock copying
        navigator.clipboard.writeText(state.p2pLink).catch(() => {});
        showToast("Ссылка скопирована!");
    });

    chatLinkCard.addEventListener('click', startBuyerFlow);
    btnSimulateBuyer.addEventListener('click', startBuyerFlow);

    function startBuyerFlow() {
        // Swap user badge to Buyer
        const userBadgeText = document.getElementById('userBadgeText');
        userBadgeText.textContent = 'Покупатель';

        // Set values in P2P Preview screen
        document.getElementById('p2pPrice').textContent = `${new Intl.NumberFormat('ru-RU').format(state.price)} ₽`;
        document.getElementById('p2pCadastral').textContent = state.cadastralNumber;
        
        const splitText = state.commissionSplit === '50-50' ? '2 950 ₽ (ваша часть)' :
                          state.commissionSplit === 'buyer' ? '5 900 ₽ (ваша часть)' : '0 ₽ (оплачено продавцом)';
        document.getElementById('p2pFee').textContent = splitText;

        // Switch to P2P Preview
        switchScreen('p2pPreview', 1);
    }
}

// ==========================================
// SCREEN 2b LOGIC (P2P Preview - Object Details)
// ==========================================
function initScreen2b() {
    const btnProceedP2P = document.getElementById('btnProceedP2P');
    const btnDeclineP2P = document.getElementById('btnDeclineP2P');

    btnProceedP2P.addEventListener('click', () => {
        // Set values in buyer screens
        document.getElementById('buyerCostLabel').textContent = `${new Intl.NumberFormat('ru-RU').format(state.price)} ₽`;
        
        const splitText = state.commissionSplit === '50-50' ? '2 950 ₽ (50%)' :
                          state.commissionSplit === 'buyer' ? '5 900 ₽ (100%)' : '0 ₽ (Оплачено продавцом)';
        document.getElementById('buyerFeeLabel').textContent = splitText;

        showToast("Переход к авторизации...", "info");
        setTimeout(() => {
            switchScreen('buyerLogin', 1);
        }, 600);
    });

    btnDeclineP2P.addEventListener('click', () => {
        showToast("Вы отказались от сделки", "info");
        setTimeout(() => {
            resetApp();
        }, 1500);
    });
}

// ==========================================
// SCREEN 3 LOGIC (Buyer Login via Sber ID)
// ==========================================
function initScreen3() {
    const btnSberIdLogin = document.getElementById('btnSberIdLogin');
    const sberIdOverlay = document.getElementById('sberIdOverlay');
    const closeSberSheet = document.getElementById('closeSberSheet');
    const btnSberIdConfirm = document.getElementById('btnSberIdConfirm');

    btnSberIdLogin.addEventListener('click', () => {
        sberIdOverlay.classList.add('active');
    });

    closeSberSheet.addEventListener('click', () => {
        sberIdOverlay.classList.remove('active');
    });

    btnSberIdConfirm.addEventListener('click', () => {
        sberIdOverlay.classList.remove('active');
        showToast("Авторизация по Сбер ID выполнена!");
        
        // Fill verify elements
        document.getElementById('verifyCadastral').textContent = state.cadastralNumber;
        const totalToFreeze = state.price + state.buyerFee;
        document.getElementById('totalToFreezeLabel').textContent = `${new Intl.NumberFormat('ru-RU').format(totalToFreeze)} ₽`;

        setTimeout(() => {
            switchScreen('buyerEscrow', 2);
        }, 800);
    });
}

// ==========================================
// SCREEN 4 LOGIC (Buyer Verification & Escrow)
// ==========================================
function initScreen4() {
    const btnFreezeFunds = document.getElementById('btnFreezeFunds');

    btnFreezeFunds.addEventListener('click', () => {
        btnFreezeFunds.classList.add('btn-disabled');
        btnFreezeFunds.innerHTML = 'Запрос к банку... <span class="spinner" style="display:inline-block; width:12px; height:12px; border:2px solid white; border-radius:50%; border-top-color:transparent; animation:spin 0.6s linear infinite; margin-left:6px;"></span>';
        
        // CSS dynamic spinner animation injection
        if(!document.getElementById('spinner-style')) {
            const style = document.createElement('style');
            style.id = 'spinner-style';
            style.innerHTML = `@keyframes spin { to { transform: rotate(360deg); } }`;
            document.head.appendChild(style);
        }

        setTimeout(() => {
            // Restore button
            btnFreezeFunds.classList.remove('btn-disabled');
            btnFreezeFunds.textContent = 'Заморозить средства';

            showToast("Средства заморожены на номинальном счете!");
            
            // Setup signing text
            document.getElementById('contractCadastral').textContent = state.cadastralNumber;
            document.getElementById('contractPrice').textContent = new Intl.NumberFormat('ru-RU').format(state.price);
            
            switchScreen('signing', 3);
        }, 1500);
    });
}

// ==========================================
// SCREEN 5 LOGIC (Signing DKP)
// ==========================================
function initScreen5() {
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const btnSignContract = document.getElementById('btnSignContract');
    const goskluchOverlay = document.getElementById('goskluchOverlay');
    const closeGoskluchSheet = document.getElementById('closeGoskluchSheet');
    const btnGoskluchConfirm = document.getElementById('btnGoskluchConfirm');
    const goskluchCadastral = document.getElementById('goskluchCadastral');

    agreeCheckbox.addEventListener('change', (e) => {
        if(e.target.checked) {
            btnSignContract.className = 'btn btn-primary';
        } else {
            btnSignContract.className = 'btn btn-disabled';
        }
    });

    btnSignContract.addEventListener('click', () => {
        if(!agreeCheckbox.checked) return;

        btnSignContract.classList.add('btn-disabled');
        btnSignContract.textContent = 'Ожидание подписи в Госключе...';

        setTimeout(() => {
            goskluchCadastral.textContent = state.cadastralNumber;
            goskluchOverlay.classList.add('active');
        }, 800);
    });

    closeGoskluchSheet.addEventListener('click', () => {
        goskluchOverlay.classList.remove('active');
        btnSignContract.classList.remove('btn-disabled');
        btnSignContract.textContent = 'Подписать через Госключ';
        showToast("Подписание отменено");
    });

    btnGoskluchConfirm.addEventListener('click', () => {
        goskluchOverlay.classList.remove('active');
        showToast("Договор успешно подписан обеими сторонами!");
        
        // Initialize timeline text
        document.getElementById('trackDesc1').textContent = `Сумма ${new Intl.NumberFormat('ru-RU').format(state.price)} ₽ защищена на счете №40911...`;
        
        // Remove User badge
        document.getElementById('userBadge').style.display = 'none';

        switchScreen('tracker', 4);
        startTimelineSimulation();
    });
}

// ==========================================
// SCREEN 6 LOGIC (Status Tracker)
// ==========================================
let simInterval = null;

function initScreen6() {
    const btnRestart = document.getElementById('btnRestart');
    const btnSpeedUp = document.getElementById('btnSpeedUp');

    btnRestart.addEventListener('click', () => {
        // Reset all screens
        clearInterval(simInterval);
        resetApp();
    });

    btnSpeedUp.addEventListener('click', () => {
        runTimelineStepFast();
    });
}

function resetApp() {
    state = {
        cadastralNumber: "77:01:0001001:4212",
        price: 1500000,
        commissionSplit: "50-50",
        ownershipYears: 5,
        buyerName: "Петров Алексей Игоревич",
        sellerName: "Лукошина Екатерина Александровна",
        buyerFee: 2950,
        sellerFee: 2950,
        p2pLink: "",
        activeScenario: null
    };
    
    // UI Reset
    document.getElementById('cadastralInput').value = "77:01:0001001:4212";
    document.getElementById('priceInput').value = "1500000";
    document.getElementById('ownershipSlider').value = 5;
    document.getElementById('ownershipYearsLabel').textContent = "5 лет";
    document.getElementById('agreeCheckbox').checked = false;
    document.getElementById('btnSignContract').className = 'btn btn-disabled';
    document.getElementById('btnSignContract').textContent = 'Подписать через Госключ';
    document.getElementById('sberIdOverlay').classList.remove('active');
    document.getElementById('goskluchOverlay').classList.remove('active');
    document.getElementById('userBadge').style.display = 'none';
    document.querySelector('.app-container').classList.add('selector-active');
    
    document.querySelectorAll('.pill-option').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.pill-option')[0].classList.add('active'); // 50/50

    // Reset Timeline elements
    document.getElementById('trackStep3').className = 'timeline-step active';
    document.getElementById('trackTitle3').textContent = 'Передано в Росреестр';
    document.getElementById('trackDesc3').textContent = 'Ожидаем регистрацию (Fast Track API)';
    
    document.getElementById('trackStep4').className = 'timeline-step';
    document.getElementById('trackStep5').className = 'timeline-step';
    
    const btnSpeedUp = document.getElementById('btnSpeedUp');
    btnSpeedUp.className = 'btn btn-primary';
    btnSpeedUp.textContent = 'Ускорить время (API) ⚡';
    btnSpeedUp.disabled = false;

    switchScreen('selector', 1);
}

function startTimelineSimulation() {
    // We let users trigger acceleration manually or automatically run step 3 in 6 seconds
    simInterval = setTimeout(() => {
        runTimelineStepFast();
    }, 8000);
}

function runTimelineStepFast() {
    const step3 = document.getElementById('trackStep3');
    const step4 = document.getElementById('trackStep4');
    const step5 = document.getElementById('trackStep5');
    const btnSpeedUp = document.getElementById('btnSpeedUp');

    if (step3.classList.contains('active')) {
        // Step 3 completed
        step3.className = 'timeline-step completed';
        document.getElementById('trackTitle3').textContent = 'Документы приняты Росреестром';
        document.getElementById('trackDesc3').textContent = 'Пакет документов прошел валидацию API';
        
        // Step 4 active
        step4.className = 'timeline-step active';
        showToast("Росреестр: пакет документов принят");
    } else if (step4.classList.contains('active')) {
        // Step 4 completed
        step4.className = 'timeline-step completed';
        
        // Step 5 active
        step5.className = 'timeline-step active';
        showToast("Росреестр: переход права собственности зарегистрирован!");
    } else if (step5.classList.contains('active')) {
        // Step 5 completed
        step5.className = 'timeline-step completed';
        
        // Complete the process
        btnSpeedUp.className = 'btn btn-disabled';
        btnSpeedUp.textContent = 'Сделка завершена! 🎉';
        btnSpeedUp.disabled = true;
        
        const formattedPrice = new Intl.NumberFormat('ru-RU').format(state.price);
        showToast(`СБР разморожен! Выплачено ${formattedPrice} ₽ продавцу.`);
        
        // Transition to personal cabinet after 2.5 seconds
        setTimeout(() => {
            // Populate property details
            document.getElementById('myPropertyPrice').textContent = formattedPrice + ' ₽';
            document.getElementById('myPropertyCadastral').textContent = state.cadastralNumber;
            
            const currentDate = new Date();
            const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
            const dateStr = `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
            document.getElementById('myPropertyDate').textContent = dateStr;
            
            switchScreen('myProperties', 5);
        }, 2500);
    }
}

// ==========================================
// SCREEN 7 LOGIC (My Properties - Personal Cabinet)
// ==========================================
function initScreen7() {
    const btnViewDocuments = document.getElementById('btnViewDocuments');
    const btnBackToCatalog = document.getElementById('btnBackToCatalog');
    
    btnViewDocuments.addEventListener('click', () => {
        showToast("Раздел документов в разработке");
    });
    
    btnBackToCatalog.addEventListener('click', () => {
        resetApp();
    });
}
