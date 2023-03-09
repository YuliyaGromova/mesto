// Создайте класс Popup
// Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. 
// Модальное окно также закрывается при клике на затемнённую область вокруг формы.

export class Popup {
    constructor(selector) {
        this._selector = selector;
        this._popup=document.querySelector(this._selector);
        this._bottonClose = this._popup.querySelector(".popup__toggle");
    }
    setEventListeners() {
        document.addEventListener("keydown", (evt) => {
            this._closePopupEscape(evt)
        },{ once: true });
        this._popup.addEventListener("mousedown", (evt) => {
            this._closePopupOverlay(evt)
        }, { once: true });
        this._bottonClose.addEventListener('click', () => {
            this.close()
        }, { once: true });
    }
    open() {
        this._popup.classList.add("popup_opened");
        this.setEventListeners();
    }
    close() {
        this._popup.classList.remove("popup_opened");
    }
    _closePopupOverlay(evt) {
        if (evt.currentTarget === evt.target) {
          this.close();
        }
      }
    _closePopupEscape(evt) {
        if (evt.key == "Escape") {
          this.close();
        }
      }
}

// Создайте класс PopupWithImage
// Создайте класс PopupWithImage, который наследует от Popup.
// Этот класс должен перезаписывать родительский метод open. 
// В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
// Создайте класс PopupWithForm
// Создайте класс PopupWithForm, который наследует от Popup. 
// Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners. 
// Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.