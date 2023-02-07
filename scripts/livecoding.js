const formValidationConfig = {
    formSelector: '.popup__edit',
    inputSelector: '.popup__item',
    errorClass: 'popup__item_type_error', //такого класса у меня нет, класс у инпута
    buttonSelector: 'popup__submit',
    buttonDisableClass: 'popup__submit_noactive'
}


//навешиваем слушатели на форму ее инпуты и кнопку
function anableValidation(config) {
    const formList = document.querySelectorAll(config.formSelector);
    formList.forEach((form) => {
    form.addEventListener('submit', disableSubmit);
    form.addEventListener('input', () => {
        toggleButton(form, config);
    });
    addInputListeners(form,config);
    toggleButton(form, config);
    });    
}

anableValidation(formValidationConfig);

// дизейблим кнопку
function disableSubmit (evt) {
    evt.preventDefault();
}

// навешиваем слушатели на инпуты
function addInputListeners (form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach(function(item) {
        item.addEventListener('input', (evt) => {
            handelFormInput(evt, config);
        })
    });
}

function handelFormInput(evt, config) {
    const inputId = input.id;
    const errorElem = document.querySelector(`#${inputId}-error`)
    const input=evt.target;
    if (input.validity.valid) {

        input.classList.remove(config.errorClass);
        errorElem.textContent = '';
    } else {
        input.classList.add(config.errorClass);
        errorElem.textContent = input.validationMessage;
    }
}

const toggleButton = (form, config) => {
    const buttonSubmit = form.querySelector(config.buttonSelector);
    const isFormValid = form.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle('.popup__submit_noactive', isFormValid);
}