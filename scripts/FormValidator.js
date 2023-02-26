
export class FormValidator {
  constructor(form, config) {
    this._form = form;
    this._config = config;
  }

  _hideError() {
    this._error.classList.remove(this._config.errorClass);
  };

  _showError() {
    this._error.textContent = this._input.validationMessage;
    this._error.classList.add(this._config.errorClass);
  };

  _handelFormInput() {
    this._inputId = this._input.id;
    this._error = document.querySelector(`.${this._inputId}-error`);
  
    if (this._input.validity.valid) {
      this._hideError();
    } else {
      this._showError();
    }
  };

  _toggleButton() {
    this._buttonSubmit = this._form.querySelector(this._config.buttonSelector);
    this._isFormValid = this._form.checkValidity();
    this._buttonSubmit.disabled = !this._isFormValid;
    this._buttonSubmit.classList.toggle(this._config.buttonDisableClass, !this._isFormValid);
  };

  _preventDefault() {
    this._form.preventDefault();
  };
  _setEventListenersInputs() {
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._input = input;
        this._handelFormInput();
      });
    });
  };
  
  enableValidation() {
      // this._form.addEventListener("submit", () => {
      //   this._preventDefault();
      // });
      this._form.addEventListener("input", () => {
        this._toggleButton();
      });
      this._setEventListenersInputs();
    
  }
  
  reset() {
    this._toggleButton();
    this._errorList = Array.from(this._form.querySelectorAll(`.${this._config.errorClass}`));
    this._errorList.forEach((error) => {
      error.textContent = '';
    })
  }
}

export class FormAddCardValidator extends FormValidator{
  constructor(form, config) {
    super(form, config)
  }

  reset() {
    this._form.reset();
    super.reset(); 
  }
}