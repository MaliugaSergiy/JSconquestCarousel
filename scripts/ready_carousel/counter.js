import fadeIn from "./fadeIn";

export default class SliderCounter {
    constructor(instance){
        
        this.sliderInstance = instance;
        const { holderElement } = this.sliderInstance;

        this.counterElement = holderElement.querySelector(".carousel-navigationCounter")
        holderElement.addEventListener("setActiveSlideByIndex", this.render.bind(this))
        this.render(this.counterElement);

    }
    render(){
        this.counterElement.textContent = `${this.sliderInstance.activeIndex+1}/${this.sliderInstance.slidesAmount}`
        fadeIn(this.counterElement);

    }
}