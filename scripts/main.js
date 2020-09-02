import JSconquestCarousel from "./carousel"

const carouselOptions = {
    // loop: true,
    autoplay: true
}

const carousel = new JSconquestCarousel({selector:".carousel", loop: true, ...carouselOptions});
console.log("carousel", carousel)
window.carousel = carousel;
















// автопереключение
// коллбеки
// "индикатор завершения"
// плавающий индикатор
// свайп
// погинация
// динамическое добавление/удаление слайда
// пауза слайдера на ховере