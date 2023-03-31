(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._owner=e.owner._id,this._id=e._id,this._template=document.querySelector(n),this._handleCardClick=r,this._openPopupCardDelete=o,this._myLike=i(e.likes),this._likeCounter=e.likes.length,this._toggleLike=u}var n,r;return n=t,r=[{key:"_getTemplate",value:function(){return this._template.content.querySelector(".gallery__card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._photoElement=this._element.querySelector(".gallery__photo"),this._elementLike=this._element.querySelector(".like"),this._photoElement.src=this._link,this._photoElement.alt=this._name,this._element.querySelector(".gallery__name-place").textContent=this._name,this._textCounter=this._element.querySelector(".gallery__like-counter"),this._countLike(),this._showMyLike(),this._setEventListeners(),this._element}},{key:"handleDeleteCard",value:function(t){var e=this;t===this._owner&&(this._element.querySelector(".gallery__delete").classList.add("gallery__delete_active"),this._element.querySelector(".gallery__delete").addEventListener("click",(function(){e._openPopupCardDelete(e._id,e._element)})))}},{key:"_setEventListeners",value:function(){var t=this;this._elementLike.addEventListener("click",(function(){t._toggleLike(t)})),this._photoElement.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"_countLike",value:function(){this._textCounter.textContent=this._likeCounter}},{key:"toggleLike",value:function(t){this._elementLike.classList.toggle("like_active"),this._textCounter.textContent=t,this._myLike=!this._myLike}},{key:"_showMyLike",value:function(){this._myLike&&this._elementLike.classList.add("like_active")}}],r&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),r={formSelector:".popup__edit",inputSelector:".popup__item",buttonSelector:".popup__submit",buttonDisableClass:"popup__submit_noactive",errorClassActive:"popup__item-error_active",errorClass:"popup__item-error",inputErrorClass:"popup__item_error"},o={galleryClass:".gallery__cards",templateSelector:"#gallery-card",likeCounterClass:".gallery__like-counter"};function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=e,this._config=n,this._buttonSubmit=this._form.querySelector(this._config.buttonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._errorList=Array.from(this._form.querySelectorAll(".".concat(this._config.errorClass)))}var e,n;return e=t,(n=[{key:"_hideError",value:function(){this._error.classList.remove(this._config.errorClassActive),this._input.classList.remove(this._config.inputErrorClass)}},{key:"_showError",value:function(){this._error.textContent=this._input.validationMessage,this._error.classList.add(this._config.errorClassActive),this._input.classList.add(this._config.inputErrorClass)}},{key:"_handelFormInput",value:function(){this._inputId=this._input.id,this._error=document.querySelector(".".concat(this._inputId,"-error")),this._input.validity.valid?this._hideError():this._showError()}},{key:"_toggleButton",value:function(){this._isFormValid=this._form.checkValidity(),this._buttonSubmit.disabled=!this._isFormValid,this._buttonSubmit.classList.toggle(this._config.buttonDisableClass,!this._isFormValid)}},{key:"_preventDefault",value:function(){this._form.preventDefault()}},{key:"_setEventListenersInputs",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._input=e,t._handelFormInput()}))}))}},{key:"enableValidation",value:function(){var t=this;this._form.addEventListener("input",(function(){t._toggleButton()})),this._setEventListenersInputs()}},{key:"resetValidation",value:function(){var t=this;this._toggleButton(),this._errorList.forEach((function(t){t.textContent=""})),this._inputList.forEach((function(e){e.classList.remove(t._config.inputErrorClass)}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var s=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function y(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}var h=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"==t.key&&i.close()},(r=y(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._selector=e,this._popup=document.querySelector(this._selector),this._buttonClose=this._popup.querySelector(".popup__toggle")}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){t._closePopupOverlay(e)})),this._buttonClose.addEventListener("click",(function(){t.close()}))}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_closePopupOverlay",value:function(t){t.currentTarget===t.target&&this.close()}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(r);if(o){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__edit"),n._saveChanges=e,n}return e=u,(n=[{key:"open",value:function(t,e){d(m(u.prototype),"open",this).call(this),this._id=t,this._element=e}},{key:"setEventListeners",value:function(){var t=this;d(m(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){t._saveChanges(e,t._id,t._element)}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._photo=e._popup.querySelector(".popup__photo"),e._subtitlePopupBigPhoto=e._popup.querySelector(".popup__subtitle"),e}return e=u,(n=[{key:"open",value:function(t){w(L(u.prototype),"open",this).call(this),this._photo.src=t.link,this._photo.alt=t.name,this._subtitlePopupBigPhoto.textContent=t.name}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__edit"),n._saveChanges=e,n._inputList=Array.from(n._form.querySelectorAll(".popup__item")),n._button=n._form.querySelector(".popup__submit"),n._nameButton=n._button.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._data={},this._inputList.forEach((function(e){t._data[e.name]=e.value})),this._data}},{key:"setEventListeners",value:function(){var t=this;C(T(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){t._saveChanges(e,t._getInputValues())}))}},{key:"close",value:function(){C(T(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"renderLoading",value:function(t){this._button.textContent=t?"Сохранение...":this._nameButton}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var x=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profile=document.querySelector(".profile"),this._userName=this._profile.querySelector(e),this._userInfo=this._profile.querySelector(n),this._avatar=this._profile.querySelector(".profile__avatar")}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this.data={name:this._userName.textContent,about:this._userInfo.textContent},this.data}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userInfo.textContent=t.about,this._avatar.src=t.avatar}},{key:"setUserAvatar",value:function(t){this._avatar.src=t}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var V=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResult",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch(this._baseUrl+"/users/me",{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return t._checkResult(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch(this._baseUrl+"/cards",{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return t._checkResult(e)}))}},{key:"editUserInfo",value:function(t){var e=this;return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._checkResult(t)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch(this._baseUrl+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._checkResult(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch(this._baseUrl+"/cards/".concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return e._checkResult(t)}))}},{key:"putLike",value:function(t){var e=this;return fetch(this._baseUrl+"/cards/".concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then((function(t){return e._checkResult(t)}))}},{key:"takeOfLike",value:function(t){var e=this;return fetch(this._baseUrl+"/cards/".concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return e._checkResult(t)}))}},{key:"editAvatar",value:function(t){var e=this;return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._checkResult(t)}))}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{authorization:"6356ac75-0b91-4413-9681-673544a8d741","Content-Type":"application/json"}}),z=new q("#popupEdit",(function(t,e){t.preventDefault(),z.renderLoading(!0),V.editUserInfo(e).then((function(t){X.setUserInfo(t),z.close()})).catch((function(t){et(t)})).finally((function(){z.renderLoading(!1)}))}));z.setEventListeners();var B=new q("#popupAdd",(function(t,e){t.preventDefault(),B.renderLoading(!0),V.addNewCard(e).then((function(t){var e=ut(t);G.addItem(e),B.close()})).catch((function(t){console.log(t),et(t)})).finally((function(){B.renderLoading(!1)}))}));B.setEventListeners();var N=new q("#popupEditAvatar",(function(t,e){t.preventDefault(),N.renderLoading(!0),V.editAvatar(e).then((function(t){X.setUserAvatar(t.avatar),N.close()})).catch((function(t){et(t)})).finally((function(){N.renderLoading(!1)}))}));N.setEventListeners();var F=new O("#popupOpenPic");F.setEventListeners();var J=new g("#popupDeleteCard",(function(t,e,n){t.preventDefault(),V.deleteCard(e,n).then((function(){n.remove(),J.close()})).catch((function(t){et(t)}))}));J.setEventListeners();var M,G,H=document.querySelector(".profile"),K=H.querySelector(".profile__button-edit"),Q=H.querySelector(".profile__button-add"),W=H.querySelector(".profile__button-avatar"),X=new x(".profile__name",".profile__info"),Y=new a(document.forms.popupEdit,r),Z=document.forms.popupAvatar,$=new a(Z,r),tt=new a(document.forms.popupAdd,r);function et(t){console.log(t),alert("По техническим причинам данная операция недоступна. Попробуйте позднее")}function nt(t,e){F.open({name:t,link:e})}function rt(t,e){J.open(t,e)}function ot(t){var e=!1;return t.length&&t.forEach((function(t){t._id===M&&(e=!0)})),e}function it(t){t._myLike?V.takeOfLike(t._id).then((function(e){t.toggleLike(e.likes.length)})).catch((function(t){console.log(t)})):V.putLike(t._id).then((function(e){t.toggleLike(e.likes.length)})).catch((function(t){console.log(t)}))}function ut(t){var e=new n(t,o.templateSelector,nt,rt,ot,it),r=e.generateCard();return e.handleDeleteCard(M),r}Promise.all([V.getUserInfo(),V.getInitialCards()]).then((function(t){M=t[0]._id,X.setUserInfo(t[0]),t[1].reverse(),(G=new s({renderer:function(t){var e=ut(t);G.addItem(e)}},o.galleryClass)).renderItems(t[1])})).catch((function(t){console.log(t),document.querySelector(".content").classList.add("content_disabled"),document.querySelector(".error").classList.add("error_active")})),K.addEventListener("click",(function(){var t=X.getUserInfo();z.setInputValues(t),Y.resetValidation(),z.open()})),Q.addEventListener("click",(function(){tt.resetValidation(),B.open()})),W.addEventListener("click",(function(){Z.reset(),$.resetValidation(),N.open()})),Y.enableValidation(),tt.enableValidation(),$.enableValidation()})();