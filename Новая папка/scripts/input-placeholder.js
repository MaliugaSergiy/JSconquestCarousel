function getTemplate(inputHTML, placeholder){
    const innerTemplate = `
        <div class="input js-input">
            <label class="input-label">
                ${inputHTML}
                <div class="input-placeholder">${placeholder}</div>
            </label>
        </div>`;

        return innerTemplate;
}

function wrapInputElemet(inputElement) {

    inputElement.classList.add("input-field");
    inputElement.classList.remove("js-input");
    const placeholder = inputElement.placeholder;
    inputElement.removeAttribute("placeholder");
    const inputElementHTML = inputElement.outerHTML;
    const template = getTemplate(inputElementHTML, placeholder);

    inputElement.outerHTML = template;
}

export function initDynamicInputPlaceholder(selector) {
    let elements = document.querySelectorAll(selector);
    elements.forEach(element=> {
        const tagName = element.tagName;

        if(tagName === "INPUT"){
            wrapInputElemet(element);
        }
    })

    const checkedElements = document.querySelectorAll(selector);

    for (let i = 0; i < checkedElements.length; i++){
        let element = checkedElements[i]
        
        createDynamicInputPlaceholder(element);
    }

    // checkedElements.forEach(element => createDynamicInputPlaceholder(element))
}

function createDynamicInputPlaceholder(element){
    const FOCUSEED_CLASS = 'input--isFocused';
    const FILLED_CLASS = 'input--isFilled';

    let inputField = element.querySelector('input, textarea');

    inputField.addEventListener('focus', handleFocusInput);
    inputField.addEventListener('blur', handleBlurInput);

    function handleFocusInput() {
        element.classList.add(FOCUSEED_CLASS);
        element.classList.add(FILLED_CLASS);
    }
    function handleBlurInput() {
        element.classList.remove(FOCUSEED_CLASS);

        inputField.value = inputField.value.trim();

        const inputValue = inputField.value;
        const hasInputValue = inputValue !== "";
        if(hasInputValue) {
            return;
        }
        
        element.classList.remove(FILLED_CLASS);
    }
}

export default createDynamicInputPlaceholder;