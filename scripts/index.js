import { Card } from "./Card.js";
import { initialCards, formValidationConfig, cardConfig } from "./Config.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

const profilePopupClass = new PopupWithForm("#popupEdit", saveEditProfile);
profilePopupClass.setEventListeners();
const cardPopupClass = new PopupWithForm("#popupAdd", saveAddCard);
cardPopupClass.setEventListeners();
const imagePopupClass = new PopupWithImage("#popupOpenPic");
imagePopupClass.setEventListeners();

const profile = document.querySelector(".profile");
const buttonEditProfile = profile.querySelector(".profile__button-edit");
const buttonAddCard = profile.querySelector(".profile__button-add");

const profileClass = new UserInfo(".profile__name", ".profile__info");

const formProfile = document.forms["popupEdit"];
const formSaveEditProfile = new FormValidator(
  formProfile,
  formValidationConfig
);

const formAddCard = document.forms["popupAdd"];
const formSaveCard = new FormValidator(formAddCard, formValidationConfig);

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const cardElement = getCard(item);
      cardList.addItem(cardElement);
    },
  },
  cardConfig.galleryClass
);

cardList.renderItems();

//функции открывающие popup
function openPopupProfile() {
  const data = profileClass.getUserInfo();
  profilePopupClass.getInputValues(data);
  formSaveEditProfile.resetValidation();
  profilePopupClass.open();
}

function openPopupAddCard() {
  formAddCard.reset();
  formSaveCard.resetValidation();
  cardPopupClass.open();
}

function openPopupBigImage(name, link) {
  imagePopupClass.open({ name, link });
}

function getCard(item) {
  const card = new Card(item, cardConfig.templateSelector, openPopupBigImage);
  const cardElement = card.generateCard();
  return cardElement;
}

//функции сохраняющие изменения
function saveEditProfile(evt, data) {
  evt.preventDefault();
  profileClass.setUserInfo(data);
  profilePopupClass.close();
}

function saveAddCard(evt, data) {
  evt.preventDefault();
  const cardElement = getCard(data);
  cardList.addItem(cardElement);
  cardPopupClass.close();
}

//кнопка "редактировать" открывает popup редактирования информации о пользователе
buttonEditProfile.addEventListener("click", openPopupProfile);

//кнопка "добавить" открывает popup добавления новой картиочки
buttonAddCard.addEventListener("click", openPopupAddCard);

//вызов функции валидации форм
formSaveEditProfile.enableValidation();
formSaveCard.enableValidation();
