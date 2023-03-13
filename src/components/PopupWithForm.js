import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, saveChanges) {
    super(selector);
    this._form = this._popup.querySelector(".popup__edit");
    this._saveChanges = saveChanges;
    this._inputList= Array.from(
      this._form.querySelectorAll('.popup__item'));
  }

  _getInputValues() {
    this._data = {};
    this._inputList.forEach((input) => {
      this._data[input.name] = input.value;
    })
    return this._data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      this._saveChanges(evt, this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
  
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }
}
