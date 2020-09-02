import KeyboardNavigation from "./KeyboardNavigation";
import SliderNavigation from "./SliderNavigation";
import SliderCounter from "./counter";

export default class JSconquestCarousel {
    constructor({selector, ...props}) {
        this.ACTIVE_CLASS = "active";
        
        this.customeEvents = {};
        this.#createCustomeEvents();

        // options
        // this.navigationInstance = null;
        // this.navigationCounter = null;

        this.holderElement = document.querySelector(selector);
        this.props = {...props };
        
        
        if(!this.holderElement) {
            console.warn("you should add selector");
            return;
        }

        this.slides = Array.from(this.holderElement.querySelectorAll("img"));
        this.activeIndex = this.initialActiveIndex;
        this.#initialResetActiveClasses();
        this.#initialSetActiveClass();

        this.#initOptions();
    }

    #createCustomeEvents() {
        this.customeEvents["setActiveSlideByIndex"] =  new CustomEvent('setActiveSlideByIndex');
    }

    #initOptions() {
        // this.navigationInstance = new SliderNavigation(this);
        // new KeyboardNavigation(this);
        // this.navigationCounter = new SliderCounter(this);
        new SliderNavigation(this);
        new KeyboardNavigation(this);
        new SliderCounter(this);
    }

    get isFirst(){
        return this.activeIndex === 0;
    }
    get isLast(){
        return this.activeIndex === this.lastIndex;
    }

    get slidesAmount() {
        return this.slides.length
    }

    get lastIndex() {
        return this.slidesAmount - 1
    }

    get nextIndex() {
        return this.isLast && this.props.loop ? 0 : this.activeIndex + 1;
    }
    get prevIndex() {
        return this.isFirst && this.props.loop ? this.lastIndex : this.activeIndex - 1;
    }

    get initialActiveIndex () {
        const _activeIndex = this.slides.findIndex(item => item.classList.contains(this.ACTIVE_CLASS));
        if(_activeIndex === -1) {
            return 0
        }
        return _activeIndex;
    }

    get activeSlide() {
        return this.slides[this.activeIndex];
    }

    #initialResetActiveClasses() {
        this.slides.forEach(slide => slide.classList.remove(this.ACTIVE_CLASS))
    }

    #initialSetActiveClass(){
        this.setActiveSlideByIndex(this.activeIndex)
    }

    setActiveSlideByIndex=(index)=> {
        const slide = this.slides[index];
        const chaiceMessage = `Choice index in range between 0-${this.lastIndex}`

        if(!slide) {
            console.warn(`There isn't slide with index ${index}. ${chaiceMessage}.`);
            return;
        };
        if(index === this.activeIndex) {
            console.warn(`Current index ${this.activeIndex}. ${chaiceMessage} except ${this.activeIndex}`)
        }

        this.#resetPrevActive();
        slide.classList.add(this.ACTIVE_CLASS);
        this.activeIndex = index;

        // options reload
        // this.navigationInstance && this.navigationInstance.setDisabled();
        // this.navigationCounter && this.navigationCounter.render();

        this.holderElement.dispatchEvent(this.customeEvents["setActiveSlideByIndex"])
    }

    #resetPrevActive() {
        this.activeSlide.classList.remove(this.ACTIVE_CLASS);
    }

    setNextActive=()=>{
        this.setActiveSlideByIndex(this.nextIndex);
    }
    setPrevActive=()=>{
        this.setActiveSlideByIndex(this.prevIndex);  
    }
}
