import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, saveChanges) {
    super(selector);
    this._form = this._popup.querySelector(".popup__edit");
    this._name = this._form.querySelector(".popup__item_el_name");
    this._info = this._form.querySelector(".popup__item_el_info");
    this._saveChanges = saveChanges;
  }

  _getInputValues() {
    this._data = {
      name: this._name.value,
      info: this._info.value,
      link: this._info.value,
    };
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
  
  getInputValues(data) {
    this._name.value = data.name;
    this._info.value = data.info;
  }
}
