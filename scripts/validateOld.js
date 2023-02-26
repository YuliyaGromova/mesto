// конфигурационный объект
const formValidationConfig = {
  formSelector: ".popup__edit",
  inputSelector: ".popup__item",
  buttonSelector: ".popup__submit",
  buttonDisableClass: "popup__submit_noactive",
  errorClass: "popup__item-error_active",
};

// функция проверки инпутов на вадидность
function handelFormInput(input, config) {
  const inputId = input.id;
  const errorElem = document.querySelector(`.${inputId}-error`);

  if (input.validity.valid) {
    hideError(errorElem, config);
  } else {
    showError(errorElem, input, config);
  }
}

// функция скрывает сообщения об ошибках
const hideError = (error, config) => {
  error.classList.remove(config.errorClass);
  error.textContent = "";
};

// функция показывает сообзения об ошибках
const showError = (error, input, config) => {
  error.textContent = input.validationMessage;
  error.classList.add(config.errorClass);
};

// функция изменяет состояние окнопки в зависимости от того прошла ли форма проверку
const toggleButton = (form, config) => {
  const buttonSubmit = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.buttonDisableClass, !isFormValid);
};

// отмена стандартного поведения браузера
function preventDefault(evt) {
  evt.preventDefault();
}

// обработчик события на ввод каждого символа в инпуты
const setEventListenersInputs = (form, config) => {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  inputList.forEach((item) => {
    item.addEventListener("input", (evt) => {
      const input = evt.target;
      handelFormInput(input, config);
    });
  });
};

// обработчик событий на форму
function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((form) => {
    form.addEventListener("submit", preventDefault);
    form.addEventListener("input", () => {
      toggleButton(form, config);
    });
    setEventListenersInputs(form, config);
  });
}

// вызов функции
enableValidation(formValidationConfig);
