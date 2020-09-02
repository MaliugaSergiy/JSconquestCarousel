export default class SliderNavigation {
    constructor(instance){
        this.sliderInstance = instance;
        const {holderElement} = this.sliderInstance;
        this.nextButton = holderElement.querySelector(".carousel-next");
        this.prevButton = holderElement.querySelector(".carousel-prev");
        this.isLoop = this.sliderInstance.props.loop;

        this.nextButton.addEventListener("click", this.handleNextClick);
        this.prevButton.addEventListener("click", this.handlePrevClick);
        holderElement.addEventListener("setActiveSlideByIndex", this.setDisabled.bind(this))

        this.setDisabled();
    }

    setDisabled(){
        if(this.isLoop) {
            return;
        }

        this.nextButton.disabled = false;
        this.prevButton.disabled = false;

        if(this.sliderInstance.isFirst){
            this.prevButton.disabled = true;
        }
        if(this.sliderInstance.isLast){
            this.nextButton.disabled = true;
        }
    }

    handlePrevClick = ({target}) => {
        this.sliderInstance.setPrevActive();

        if(this.isLoop) {
            return;
        }
        target.disabled = this.sliderInstance.isFirst;
        this.nextButton.disabled = false;
    }
    handleNextClick = ({target}) => {
        this.sliderInstance.setNextActive();

        if(this.isLoop) {
            return;
        }
        target.disabled = this.sliderInstance.isLast;
        this.prevButton.disabled = false;
    }
}
