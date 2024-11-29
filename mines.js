let count = 1;
const countElement = document.getElementById('count');

function increment() {
    if (count < 7) {
        count += 2;
        countElement.textContent = count;
    }
}

function decrement() {
    if (count > 1) {
        count -= 2;
        countElement.textContent = count;
    }
}


function loadRandomPhoto() {
    const loadingText = document.getElementById('loading-text'); // Получение элемента текста загрузки
    const progressBar = document.getElementById('progressbar');
    const loadingBar = document.getElementById('loading');
    const loadedImage = document.getElementById('loaded-image');
    let progress = 0;

    // Скрыть фотографию перед началом новой загрузки
    loadedImage.style.display = 'none';
    progressBar.style.display = 'block';  // Показать линейный индикатор загрузки
    loadingText.style.display = 'block';  // Показать текст загрузки
    loadingBar.style.width = '0%';        // Сброс ширины индикатора загрузки

    const photos = [
        ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg'],
        ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg'],
        ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg'],
        ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg']
    ];

    const interval = setInterval(() => {
        progress++;
        loadingBar.style.width = `${progress}%`; // Обновление ширины индикатора загрузки

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadedImage.onload = () => {
                    loadedImage.style.display = 'block';
                    progressBar.style.display = 'none'; // Скрыть индикатор загрузки
                    loadingText.style.display = 'none';  // Скрыть текст загрузки
                };
                const photoIndex = Math.floor((count - 1) / 2);
                const randomIndex = Math.floor(Math.random() * photos[photoIndex].length);
                loadedImage.src = photos[photoIndex][randomIndex];
            }, 250);
        }
    }, 25);
}