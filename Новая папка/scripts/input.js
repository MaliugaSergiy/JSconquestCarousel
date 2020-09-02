


function initInputFocus(selector) {
    const inputEelements = document.querySelectorAll(selector)

    
    // for(let i = 0; i < inputEelements.length; i++ ){
    //     createInputFocus(inputEelements[i])
    // }

    // inputEelements.forEach(function(element){
    //     createInputFocus(element)
    // })

    inputEelements.forEach((element)=> createInputFocus(element))

}

initInputFocus(".js-input")

function createInputFocus(element) {
    const FOCUSEED_CLASS = 'input--isFocused';
    const FILLED_CLASS = 'input--isFilled';

    let inputField = element.querySelector('input');
    inputField.addEventListener("focus", handleInputFocus);
    inputField.addEventListener("click", () => console.log("click"));
    inputField.addEventListener("blur", handleInputBlur);

    function handleInputFocus() {
        element.classList.add(FOCUSEED_CLASS);
        element.classList.add(FILLED_CLASS);
    }
    
    function handleInputBlur() {
        element.classList.remove(FOCUSEED_CLASS);
    
        inputField.value = inputField.value.trim();

        const value = inputField.value
        
        const hasInputValue = value !== "";

        if(hasInputValue) {
            return;
        }

        element.classList.remove(FILLED_CLASS);
    }

}



// createInputFocus(inputEelements[0])
