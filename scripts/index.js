import { Card } from "./Card.js";
import { initialCards, formValidationConfig, cardConfig } from "./Config.js";
import { FormValidator, FormAddCardValidator } from "./FormValidator.js";


const profilePopup = document.querySelector("#popupEdit");
const cardPopup = document.querySelector("#popupAdd");
const imagePopup = document.querySelector("#popupOpenPic");

const profile = document.querySelector(".profile");
const userName = profile.querySelector(".profile__name");
const userInfo = profile.querySelector(".profile__info");
const buttonEditProfile = profile.querySelector(".profile__button-edit");
const buttonAddCard = profile.querySelector(".profile__button-add");

const buttonsToggleList = document.querySelectorAll(".popup__toggle");

const formProfile = document.forms["popupEdit"];
const formSaveEditProfile = new FormValidator(
  formProfile,
  formValidationConfig
);
const userNamePopup = profilePopup.querySelector(".popup__item_el_name");
const userInfoPopup = profilePopup.querySelector(".popup__item_el_info");

const formAddCard = document.forms["popupAdd"];
const formSaveCard = new FormAddCardValidator(
  formAddCard,
  formValidationConfig
);
const photoNamePlacePopup = cardPopup.querySelector(".popup__item_el_name");
const photoLinkPlacePopup = cardPopup.querySelector(".popup__item_el_info");
const imagePopupBigPhoto = imagePopup.querySelector(".popup__photo");
const subtitlePopupBigPhoto = document.querySelector(".popup__subtitle");


//функции открывающие popup
function openPopupProfile() {
  userNamePopup.value = userName.textContent;
  userInfoPopup.value = userInfo.textContent;
  formSaveEditProfile.reset();
  openPopup(profilePopup);
}

function openPopupAddCard() {
  formSaveCard.reset();
  openPopup(cardPopup);
}

function openPopupBigImage(name, link) {
  imagePopupBigPhoto.src = link;
  imagePopupBigPhoto.alt = name;
  subtitlePopupBigPhoto.textContent = name;
  openPopup(imagePopup);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEscape);
  popup.addEventListener("mousedown", closePopupOverlay);
}

//функция закрывающая открытый popup
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEscape);
  popup.removeEventListener("mousedown", closePopupOverlay);
}

//закрытие по оверлею
function closePopupOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.target);
  }
}

//закрытие по Esc
function closePopupEscape(evt) {
  if (evt.key == "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

//функции сохраняющие изменения
function saveEditProfile(evt) {
  evt.preventDefault();
  userName.textContent = userNamePopup.value;
  userInfo.textContent = userInfoPopup.value;
  closePopup(profilePopup);
}

function saveAddCard(evt) {
  evt.preventDefault();
  const item = {
    name: photoNamePlacePopup.value,
    link: photoLinkPlacePopup.value,
  };
  createNewCard(item, cardConfig, openPopupBigImage);
  closePopup(cardPopup);
}

// создание экземляра класса Card
function createNewCard(obj, config, func) {
  const card = new Card(obj, config.templateSelector, openPopupBigImage);
  const cardElement = card.generateCard();
  document.querySelector(config.galleryClass).prepend(cardElement);
}

//кнопка "сохранить" в popup сохраняет введенные значения и закрывает popup (навешивание события на все кнопки сохраняющие изменения)
formProfile.addEventListener("submit", saveEditProfile);
formAddCard.addEventListener("submit", saveAddCard);

//кнопка "редактировать" открывает popup редактирования информации о пользователе
buttonEditProfile.addEventListener("click", openPopupProfile);

//кнопка "добавить" открывает popup добавления новой картиочки
buttonAddCard.addEventListener("click", openPopupAddCard);

//кнопка "крестик" закрывает открытый popup
buttonsToggleList.forEach((item) => {
  const popup = item.closest(".popup");
  item.addEventListener("click", () => closePopup(popup));
});

//умолчательные карточки
initialCards.forEach((item) => {
  createNewCard(item, cardConfig, openPopupBigImage);
});

//вызов функции валидации форм
formSaveEditProfile.enableValidation();
formSaveCard.enableValidation();
