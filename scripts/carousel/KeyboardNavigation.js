export default class KeyboardNavigation {
    constructor(instance){
        this.sliderInstance = instance;
        
        this.sliderInstance.holderElement.addEventListener('keydown', this.handleKeyDown)
        this.sliderInstance.holderElement.tabIndex = 0;
    }

    handleKeyDown = (e) => {
        const { keyCode } = e;
        const KEY_CODES = {
            ARROW_LEFT: 37,
            ARROW_RIGHT: 39,
            ARROW_UP: 38,
            ARROW_DOWN: 40
          };
        const nextKeyCodes = [KEY_CODES.ARROW_RIGHT, KEY_CODES.ARROW_UP];
        const prevKeyCodes = [KEY_CODES.ARROW_LEFT, KEY_CODES.ARROW_DOWN];

        // if(keyCode === this.KEY_CODES.ARROW_RIGHT) {
        // if(nextKeyCodes.includes(keyCode)) {
        if(nextKeyCodes.indexOf(keyCode) !== -1) {
            this.sliderInstance.setNextActive()
        }
        // if(keyCode === this.KEY_CODES.ARROW_LEFT) {
        if(prevKeyCodes.includes(keyCode)) {
            this.sliderInstance.setPrevActive()
        }
    }
}