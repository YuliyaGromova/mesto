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
const formSaveEditProfile = profilePopup.querySelector(".popup__edit");
const userNamePopup = profilePopup.querySelector(".popup__item_el_name");
const userInfoPopup = profilePopup.querySelector(".popup__item_el_info");
const formSaveCard = cardPopup.querySelector(".popup__edit");
const photoNamePlacePopup = cardPopup.querySelector(".popup__item_el_name");
const photoLinkPlacePopup = cardPopup.querySelector(".popup__item_el_info");
const imagePopupBigPhoto = imagePopup.querySelector(".popup__photo");
const subtitlePopupBigPhoto = document.querySelector(".popup__subtitle");
const buttonSaveNewCard = formSaveCard.querySelector('.popup__submit');

//Массив с умолчательными карточками
const initialCards = [
  {
    name: "Россия",
    link: "https://images.unsplash.com/photo-1612622807284-9854ea9bbdd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    name: "Греция",
    link: "https://images.unsplash.com/photo-1649609855494-51ccd16ac8d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    name: "Объединенные Арабские Эмираты",
    link: "https://images.unsplash.com/photo-1642952238795-da915a83206d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Индия",
    link: "https://images.unsplash.com/photo-1609067643332-8785d998aee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Испания",
    link: "https://images.unsplash.com/photo-1573393264565-b85b58325758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    name: "Мальдивы",
    link: "https://images.unsplash.com/photo-1649231144211-2840666bae26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

function openPopupProfile() {
  userNamePopup.value = userName.textContent;
  userInfoPopup.value = userInfo.textContent;
  openPopup(profilePopup);
}

function openPopupAddCard() {
  formSaveCard.reset();
  buttonSaveNewCard.classList.add("popup__submit_noactive");
  openPopup(cardPopup);
}

function openPopupBigImage(name, link) {
  imagePopupBigPhoto.src = link;
  imagePopupBigPhoto.alt = name;
  subtitlePopupBigPhoto.textContent = name;
  openPopup(imagePopup);
}

//функция открывающая popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
  const formElement = popup.querySelector(".popup__edit");
  validateForm(formElement);
}

function validateForm(form, config = formValidationConfig) {
  toggleButton(form, config);
  const inputList = Array.from(form.querySelectorAll(".popup__item"));
  inputList.forEach((item) => {
    handelFormInput(item, config);
  });
}

//функция закрывающая открытый popup
function closePopup(popup) {
  popup.classList.remove("popup_opened");
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
  addCardInGallery(photoNamePlacePopup.value, photoLinkPlacePopup.value);
  closePopup(cardPopup);
}

//лайки
function likeDislike(evt) {
  evt.target.classList.toggle("like_active");
}

//удаление карточки по "урне"
function deleteCard(evt) {
  evt.target.closest(".gallery__card").remove();
}

//создание новой карточки
function createCard(name, link) {
  const cardTemplate = cardElement.cloneNode(true); //клон
  const photoTemplate = cardTemplate.querySelector(".gallery__photo");
  photoTemplate.src = link;
  photoTemplate.alt = name;
  cardTemplate.querySelector(".gallery__name-place").textContent = name;
  cardTemplate.querySelector(".like").addEventListener("click", likeDislike);
  cardTemplate
    .querySelector(".gallery__delete")
    .addEventListener("click", deleteCard);
  photoTemplate.addEventListener("click", () => {
    openPopupBigImage(name, link);
  });
  return cardTemplate;
}

function addCardInGallery(name, link) {
  cardsElement.prepend(createCard(name, link));
}

//умолчательные карточки с фото (отображаются при загрузке страницы)
initialCards.forEach((item) => {
  addCardInGallery(item.name, item.link);
});

//кнопка "редактировать" открывает popup редактирования информации о пользователе
buttonEditProfile.addEventListener("click", openPopupProfile);

//кнопка "добавить" открывает popup добавления новой картиочки
buttonAddCard.addEventListener("click", openPopupAddCard);

//кнопка "закрыть" в popup закрывает открытый popup (навешивание события на все крестики)
buttonsToggleList.forEach((item) => {
  const popup = item.closest(".popup");
  item.addEventListener("click", () => closePopup(popup));
});

//кнопка "сохранить" в popup сохраняет введенные значения и закрывает popup (навешивание события на все кнопки сохраняющие изменения)
formSaveEditProfile.addEventListener("submit", saveEditProfile);
formSaveCard.addEventListener("submit", saveAddCard);
