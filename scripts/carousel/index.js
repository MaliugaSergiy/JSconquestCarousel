import Carousel from "./carousel";


const holderElement = document.querySelector(".carousel");

const carousel = new Carousel({
 element: holderElement,
//  loop: true
})
window.carousel = carousel;

// const carousel = {   
//     slides: [],
//     setActiveSlideByIndex: () => {},
//     setNextActive: () => {},
//     setPrevActive: () => {},
//     activeIndex: 0,
// }



// const holderElement = document.querySelector(".carousel");

// // список слайдов можем получить с бека, а можем распарсить статическую разметку

// const carousel = new Carousel({element:holderElement})
// window.carousel = carousel;
// console.log("window.carousel", window.carousel)



// legacy code
// https://ru.stackoverflow.com/questions/148402/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-legacy-code

// findIndex
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

// NodeList
// https://developer.mozilla.org/ru/docs/Web/API/NodeList

// HTMLImageElement
// https://developer.mozilla.org/ru/docs/Web/API/HTMLImageElement

// HTMLElement
// https://developer.mozilla.org/ru/docs/Web/API/HTMLElement


