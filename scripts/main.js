// Анимация прогресс-баров
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        if (percent) {
            // Запускаем анимацию с небольшой задержкой
            setTimeout(() => {
                bar.style.width = percent + '%';
            }, 300);
        }
    });
    
    // Функция для скачивания портфолио
    window.downloadPortfolio = function() {
        alert('В реальном проекте здесь будет скачивание PDF файла');
        // В реальном проекте здесь будет:
        // window.open('assets/portfolio.pdf', '_blank');
    };
    
    // Обработка формы контактов (дублируем из contacts.html для надежности)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            alert(`Спасибо, ${name}! Ваше сообщение "${subject}" отправлено.`);
            this.reset();
        });
    }
});