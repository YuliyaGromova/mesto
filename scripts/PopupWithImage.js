// Создайте класс PopupWithImage
// Создайте класс PopupWithImage, который наследует от Popup.
// Этот класс должен перезаписывать родительский метод open. 
// В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
//

import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(selector) {    
        super(selector);
    }
    open(data) {
        super.open();
        this._photo = this._popup.querySelector(".popup__photo");
        this._subtitlePopupBigPhoto = this._popup.querySelector(".popup__subtitle");
        this._photo.src = data.link;
        this._photo.alt = data.name;
        this._subtitlePopupBigPhoto.textContent = data.name;
    }
}