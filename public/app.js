// ===== BRAND CONFIGURATION =====
const AFFILIATE_LINK = 'https://ваш-партнёрский-линк.com/offer';
const BRAND_NAME = 'Bingo 101';
const BONUS_1 = '+100% Welcome Bonus';
const BONUS_2 = '250 FREE BETS';
const BONUS_SUB = 'High income through bonuses and promotions';
const LOGO_PATH = '/images/logo.webp';

// ===== APPLY CONFIGURATION =====
document.addEventListener('DOMContentLoaded', function() {
    const brandName = document.getElementById('brandName');
    const bonus1 = document.getElementById('bonus1');
    const bonus2 = document.getElementById('bonus2');
    const bonusSub = document.getElementById('bonusSub');
    const logoImage = document.getElementById('logoImage');

    if (brandName) brandName.innerHTML = BRAND_NAME + ' App Download';
    if (bonus1) bonus1.innerHTML = '<span class="highlight">' + BONUS_1 + '</span>';
    if (bonus2) bonus2.textContent = BONUS_2;
    if (bonusSub) bonusSub.textContent = BONUS_SUB;
    if (logoImage) logoImage.src = LOGO_PATH;
});

// ===== PWA INSTALLATION =====
let deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('SW registered'))
        .catch(err => console.log('SW error:', err));
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('✅ PWA ready to install');
});

function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choice) => {
            if (choice.outcome === 'accepted') {
                console.log('✅ PWA installed');
            } else {
                console.log('❌ User declined installation');
            }
            deferredPrompt = null;
        });
    } else {
        alert('To install the app, open Chrome and tap "Add to Home Screen"');
    }
}

window.addEventListener('appinstalled', () => {
    console.log('🎯 Redirecting to offer...');
    window.location.href = AFFILIATE_LINK;
});

function handleDownloadClick() {
    if (deferredPrompt) {
        installPWA();
    } else {
        alert('To install the app, open Chrome and tap "Add to Home Screen"');
    }
    return false;
}