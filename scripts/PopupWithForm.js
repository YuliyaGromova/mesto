// Создайте класс PopupWithForm
// Создайте класс PopupWithForm, который наследует от Popup.
// Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners.
// Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.

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
  getInputValues(data){
    this._name.value = data.name;
    this._info.value = data.info;
  }
}
