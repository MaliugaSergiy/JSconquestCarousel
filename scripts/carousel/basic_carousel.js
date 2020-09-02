const ACTIVE_CLASS = "active";

export default class BasicCarousel {
    constructor({element, ...props}) {
        this.props = {...props };
        this.isLoop = this.props.loop

        this.holderElement = element;
        
        if(!this.holderElement) {
            console.warn("you should add element");
            return;
        }

        // this.slides = this.holderElement.querySelectorAll("img");
        this.slides = Array.from(this.holderElement.querySelectorAll("img"));
        this.manageInitActiveClass();
    }

    manageInitActiveClass() {
        this.activeIndex = this.initialActiveIndex;
        this._resetInitialActiveClasses();
        this._initialSetActiveClass();
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
        return this.isLast && this.isLoop ? 0 : this.activeIndex + 1;
    }
    get prevIndex() {
        return this.isFirst && this.isLoop ? this.lastIndex : this.activeIndex - 1;
    }

    get initialActiveIndex () {
        const _activeIndex = this.slides.findIndex(item => item.classList.contains(ACTIVE_CLASS));
        if(_activeIndex === -1) {
            return 0
        }
        return _activeIndex;
    }

    get activeSlide() {
        return this.slides[this.activeIndex];
    }

    _resetInitialActiveClasses() {
        this.slides.forEach(slide => slide.classList.remove(ACTIVE_CLASS))
    }

    _initialSetActiveClass(){
        this.setActiveSlideByIndex(this.activeIndex)
    }

    setActiveSlideByIndex=(index)=> {
        const slide = this.slides[index];
        const chaiceMessage = `Choice index in range between 0-${this.lastIndex}`

        if(!slide) {
            console.warn(`There isn't slide with index ${index}. ${chaiceMessage}.`);
            return;
        };

        this._resetPrevActive();
        slide.classList.add(ACTIVE_CLASS);
        this.activeIndex = index;
        return {
            index: this.activeIndex,
            element: slide
        }
    }

    _resetPrevActive() {
        this.activeSlide.classList.remove(ACTIVE_CLASS);
    }

    setNextActive=()=>{
        return this.setActiveSlideByIndex(this.nextIndex);
    }
    setPrevActive=()=>{
        return this.setActiveSlideByIndex(this.prevIndex);  
    }
}
