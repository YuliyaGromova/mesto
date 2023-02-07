const formValidationConfig = {
  formSelector: ".popup__edit",
  inputSelector: ".popup__item",
  buttonSelector: ".popup__submit",
  buttonDisableClass: "popup__submit_noactive",
  errorClass: "popup__item-error_active", 
};


function handelFormInput(input, config) {
  const inputId = input.id;
  const errorElem = document.querySelector(`.${inputId}-error`);
  
  if (input.validity.valid) {
    hideError(errorElem, config);
  } else {
    showError(errorElem, input, config);
  }
}

const hideError = (error, config) => {
  error.classList.remove(config.errorClass);
  error.textContent = '';
};

const showError = (error, input, config) => {
  error.textContent = input.validationMessage;
  error.classList.add(config.errorClass);
};

const toggleButton = (form, config) => {
  const buttonSubmit = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.buttonDisableClass, !isFormValid);
};

function disableSubmit(evt) {
  evt.preventDefault();
}

const setEventListenersInputs = (form, config) => {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  inputList.forEach((item) => {
    item.addEventListener("input", (evt) => {
      const input = evt.target;
      handelFormInput(input, config);
    });
  });
};

function anableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((form) => {
    form.addEventListener("submit", disableSubmit);
    form.addEventListener("input", () => {
      toggleButton(form, config);
    });
    setEventListenersInputs(form, config);
  });
}

anableValidation(formValidationConfig);