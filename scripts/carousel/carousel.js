import BasicCarousel from "./basic_carousel";
import SliderNavigation from "./SliderNavigation";
import KeyboardNavigation from "./KeyboardNavigation";

export default class Carousel extends BasicCarousel {
    constructor(props){
        super(props)
        
        this._initOptions();
    }

    _initOptions(){
        new SliderNavigation(this);
        new KeyboardNavigation(this);
    }
}