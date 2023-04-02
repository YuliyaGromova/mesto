import { Popup } from "./Popup.js";

export class PopupForDeleteCard extends Popup {
    constructor(selector, saveChanges) {
        super(selector);
        this._form = this._popup.querySelector(".popup__edit");
        this._saveChanges = saveChanges;
      }
      open(cardId, deleteCard) {
        super.open();
        this._id = cardId;
        this._deleteCard= deleteCard;
      }
      
      setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
          this._saveChanges(evt, this._id, this._deleteCard);
        });
      }

      
}