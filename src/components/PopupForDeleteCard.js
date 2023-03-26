import { Popup } from "./Popup.js";

export class PopupForDeleteCard extends Popup {
    constructor(selector, saveChanges) {
        super(selector);
        this._form = this._popup.querySelector(".popup__edit");
        this._saveChanges = saveChanges;
      }
      open(cardId) {
        super.open();
        this._id = cardId;
      }
      
      setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
          this._saveChanges(evt, this._id);
        });
      }
}