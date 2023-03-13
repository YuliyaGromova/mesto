import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._photo = this._popup.querySelector(".popup__photo");
    this._subtitlePopupBigPhoto = this._popup.querySelector(".popup__subtitle");
  }
  
  open(data) {
    super.open();
    this._photo.src = data.link;
    this._photo.alt = data.name;
    this._subtitlePopupBigPhoto.textContent = data.name;
  }
}
