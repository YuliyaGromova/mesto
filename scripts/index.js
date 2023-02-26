import { Card } from "./Card.js";
import { initialCards, formValidationConfig } from "./Config.js";
import { FormValidator, FormAddCardValidator } from "./FormValidator.js";

const profilePopup = document.querySelector("#popupEdit");
const cardPopup = document.querySelector("#popupAdd");
const imagePopup = document.querySelector("#popupOpenPic");

const profile = document.querySelector(".profile");
const userName = profile.querySelector(".profile__name");
const userInfo = profile.querySelector(".profile__info");
const buttonEditProfile = profile.querySelector(".profile__button-edit");
const buttonAddCard = profile.querySelector(".profile__button-add");

const cardsElement = document.querySelector(".gallery__cards");
const template = document.querySelector("#gallery-card").content;
const cardElement = template.querySelector(".gallery__card");

const buttonsToggleList = document.querySelectorAll(".popup__toggle");
const formSaveEditProfile = new FormValidator(profilePopup.querySelector(".popup__edit"), formValidationConfig);

const userNamePopup = profilePopup.querySelector(".popup__item_el_name");
const userInfoPopup = profilePopup.querySelector(".popup__item_el_info");
const formSaveCard = new FormAddCardValidator(cardPopup.querySelector(".popup__edit"), formValidationConfig);
const photoNamePlacePopup = cardPopup.querySelector(".popup__item_el_name");
const photoLinkPlacePopup = cardPopup.querySelector(".popup__item_el_info");
const imagePopupBigPhoto = imagePopup.querySelector(".popup__photo");
const subtitlePopupBigPhoto = document.querySelector(".popup__subtitle");


const cardConfig = {
  galleryClass: ".gallery__cards",
  templateSelector: "#gallery-card",
};

//умолчательные карточки работают
initialCards.forEach((item) => {
  const card = new Card(item, cardConfig.templateSelector, openPopupBigImage);
  const cardElement = card.generateCard();
  document.querySelector(cardConfig.galleryClass).prepend(cardElement);
});


//кнопка "редактировать" открывает popup редактирования информации о пользователе
buttonEditProfile.addEventListener("click", openPopupProfile);

//кнопка "добавить" открывает popup добавления новой картиочки
buttonAddCard.addEventListener("click", openPopupAddCard);

buttonsToggleList.forEach((item) => {
  const popup = item.closest(".popup");
  item.addEventListener("click", () => closePopup(popup));
});

formSaveEditProfile.enableValidation();

function openPopupProfile() {
  
  userNamePopup.value = userName.textContent;
  userInfoPopup.value = userInfo.textContent;
  formSaveEditProfile.reset();
  openPopup(profilePopup);
}

formSaveCard.enableValidation();

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


function saveEditProfile(evt) {
  evt.preventDefault();
  //Введенные данные попали на страницу в раздел информации о пользователе
  userName.textContent = userNamePopup.value;
  userInfo.textContent = userInfoPopup.value;
  closePopup(profilePopup);
}

function saveAddCard(evt) {
  evt.preventDefault();
  const item = {
    name: photoNamePlacePopup.value,
    link: photoLinkPlacePopup.value
  };
  const card = new Card(item, cardConfig.templateSelector, openPopupBigImage);
  const cardElement = card.generateCard();
  document.querySelector(cardConfig.galleryClass).prepend(cardElement);
  // addCardInGallery(photoNamePlacePopup.value, photoLinkPlacePopup.value);
  closePopup(cardPopup);
}

//кнопка "сохранить" в popup сохраняет введенные значения и закрывает popup (навешивание события на все кнопки сохраняющие изменения)
document.forms['popupEdit'].addEventListener("submit", saveEditProfile);
document.forms['popupAdd'].addEventListener("submit", saveAddCard);

//ПР6 закрытие по оверлею
function closePopupOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.target);
  }
}

// ПР6 закрытие по Esc
function closePopupEscape(evt) {
  if (evt.key == "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
}

