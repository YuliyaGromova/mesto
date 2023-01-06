const profile = document.querySelector(".profile");
const userName = profile.querySelector(".profile__name");
const userInfo = profile.querySelector(".profile__info");
const editButton = profile.querySelector(".profile__button-edit");
const addButton = profile.querySelector(".profile__button-add");

const addCards = document.querySelector(".gallery__cards");
const template = document.querySelector("#gallery-card").content;

const toggleButtons = document.getElementsByClassName("popup__toggle"); // псевдомассив из "крестиков"
const buttonsSave = document.getElementsByClassName("popup__edit"); // псевдомассив из кнопок сохраняющих изменения

// Массив с умолчательными карточками
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

//функция открывающая popup
function popupOpen(index) {
  //если кликнута кнопка редактирования проофиля
  if (index === "edit") {
    document.querySelector("#popupEdit").classList.add("popup_opened");

    document.querySelector("[name='namePopup']").value = userName.textContent;
    document.querySelector("[name='infoPopup']").value = userInfo.textContent;
    //если кликнута кнопка добавления новой карточки
  } else if (index === "add") {
    document.querySelector("#popupAdd").classList.add("popup_opened");
    document.querySelector("[name='namePlacePopup']").value = "";
    document.querySelector("[name='linkPopup']").value = "";
  } else {
    alert("что то пошло не так");
  }
}

function popupOpenPic(evt) {
  const eventTargetPic = evt.target.parentElement;
  document.querySelector("#popupOpenPic").classList.add("popup_opened");
  document.querySelector(".popup__photo").src =
    eventTargetPic.querySelector(".gallery__photo").src;
  document.querySelector(".popup__subtitle").textContent =
    eventTargetPic.querySelector(".gallery__name-place").textContent;
}

//функция закрывающая открытый popup
function popupClose() {
  document.querySelector(".popup_opened").classList.remove("popup_opened");
}

//функция сохраняющая введенные данные
function handleFormSubmit(evt) {
  evt.preventDefault();
  const eventTarget = evt.target;
  if (eventTarget.name === "popupEdit") {
    const nameInput = document.querySelector("[name='namePopup']").value;
    const infoInput = document.querySelector("[name='infoPopup']").value;
    //Введенные данные попали на страницу в раздел информации о пользователе
    userName.textContent = nameInput;
    userInfo.textContent = infoInput;
  } else if (eventTarget.name === "popupAdd") {
    const nameInput = document.querySelector("[name='namePlacePopup']").value;
    const infoInput = document.querySelector("[name='linkPopup']").value;

    //создается новая карточка
    createCard(nameInput, infoInput);
  }
  popupClose();
}

//лайки
function likeDislike(evt) {
  const eventTargetLike = evt.target;
  eventTargetLike.classList.toggle("like_active");
}

//удаление карточки по "урне"
function deleteCard(evt) {
  const eventTargetDelete = evt.target.parentElement;
  eventTargetDelete.remove();
}
//создание новой карточки
function createCard(name, link) {
  const cardTemplate = template.querySelector(".gallery__card").cloneNode(true); //клон
  cardTemplate.querySelector(".gallery__photo").src = link;
  cardTemplate.querySelector(".gallery__photo").alt = name;
  cardTemplate.querySelector(".gallery__name-place").textContent = name;
  addCards.prepend(cardTemplate);
  cardTemplate.querySelector(".like").addEventListener("click", likeDislike);
  cardTemplate
    .querySelector(".gallery__delete")
    .addEventListener("click", deleteCard);
  cardTemplate
    .querySelector(".gallery__photo")
    .addEventListener("click", popupOpenPic);
}

// умолчательные карточки с фото (отображаются при загрузке страницы)
for (let i = 0; i < initialCards.length; i++) {
  createCard(initialCards[i].name, initialCards[i].link);
}

// кнопка "редактировать" открывает popup редактирования информации о пользователе
editButton.addEventListener("click", () => {
  popupOpen("edit");
});
// кнопка "добавить" открывает popup добавления новой картиочки
addButton.addEventListener("click", () => {
  popupOpen("add");
});

// кнопка "закрыть" в popup закрывает открытый popup (навешивание события на все крестики)
for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener("click", popupClose);
}

// кнопка "сохранить" в popup сохраняет введенные значения и закрывает popup (навешивание события на все кнопки сохраняющие изменения)
for (let i = 0; i < buttonsSave.length; i++) {
  buttonsSave[i].addEventListener("submit", handleFormSubmit);
}
