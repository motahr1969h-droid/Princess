// دالة لإظهار رسالة الحب
function showLoveMessage() {
    const message = document.getElementById('loveMessage');
    message.classList.remove('hidden');
    
    // إنشاء confetti
    createConfetti();
    
    // إخفاء الرسالة بعد 5 ثواني
    setTimeout(() => {
        message.classList.add('hidden');
    }, 5000);
}

// إغلاق الرسالة عند الضغط على ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const message = document.getElementById('loveMessage');
        message.classList.add('hidden');
    }
});

// إنشاء تأثير confetti
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        createConfettiPiece();
    }
}

function createConfettiPiece() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// تأثيرات الصفحة بعد التحميل
document.addEventListener('DOMContentLoaded', function() {

    // تأثير التوهج للاسم
    const nameElement = document.querySelector('.glowing-name');
    if (nameElement) {
        nameElement.addEventListener('mouseenter', function() {
            this.style.animation = 'glow 0.5s ease-in-out infinite';
        });

        nameElement.addEventListener('mouseleave', function() {
            this.style.animation = 'glow 3s ease-in-out infinite';
        });
    }

    // تأثير البالونات
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('click', function() {

            this.style.animation = 'none';
            this.offsetHeight;
            this.style.animation = 'floatBalloon 3s ease-in-out infinite';

            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // تغيير لون الخلفية تدريجي
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;

        document.body.style.background = `linear-gradient(135deg,
            hsl(${hue}, 70%, 10%),
            hsl(${hue + 30}, 70%, 15%)
        )`;
    }, 100);
});

// رسالة في الكونسول
console.log('%c🎂 عيد ميلاد سعيد يا My Princess! 🎉',
    'color: #ffd700; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px #000;'
);

// منع النقر بالزر الأيمن
document.addEventListener('contextmenu', e => e.preventDefault());