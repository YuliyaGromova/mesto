export class FormValidator {
  constructor(form, config) {
    this._form = form;
    this._config = config;
    this._buttonSubmit = this._form.querySelector(this._config.buttonSelector);
    this._inputList = Array.from(
      this._form.querySelectorAll(this._config.inputSelector)
    );
    this._errorList = Array.from(
      this._form.querySelectorAll(`.${this._config.errorClass}`)
    );
  }

  _hideError() {
    this._error.classList.remove(this._config.errorClassActive);
  }

  _showError() {
    this._error.textContent = this._input.validationMessage;
    this._error.classList.add(this._config.errorClassActive);
  }

  _handelFormInput() {
    this._inputId = this._input.id;
    this._error = document.querySelector(`.${this._inputId}-error`);

    if (this._input.validity.valid) {
      this._hideError();
    } else {
      this._showError();
    }
  }

  _toggleButton() {
    this._isFormValid = this._form.checkValidity();
    this._buttonSubmit.disabled = !this._isFormValid;
    this._buttonSubmit.classList.toggle(
      this._config.buttonDisableClass,
      !this._isFormValid
    );
  }

  _preventDefault() {
    this._form.preventDefault();
  }

  _setEventListenersInputs() {  
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._input = input;
        this._handelFormInput();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("input", () => {
      this._toggleButton();
    });
    this._setEventListenersInputs();
  }

  resetValidation() {
    this._toggleButton(); 
    this._errorList.forEach((error) => {
      error.textContent = "";
    });
  }
}

