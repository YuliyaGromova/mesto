//Массив с умолчательными карточками
export const initialCards = [
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

//конфигурационный объект
export const formValidationConfig = {
  formSelector: ".popup__edit",
  inputSelector: ".popup__item",
  buttonSelector: ".popup__submit",
  buttonDisableClass: "popup__submit_noactive",
  errorClass: "popup__item-error_active",
};

export const cardConfig = {
  galleryClass: ".gallery__cards",
  templateSelector: "#gallery-card",
};
