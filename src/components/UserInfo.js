export class UserInfo {
  constructor(nameSelector, infoSelector) {
    this._profile = document.querySelector(".profile");
    this._userName = this._profile.querySelector(nameSelector);
    this._userInfo = this._profile.querySelector(infoSelector);
    this._avatar = this._profile.querySelector(".profile__avatar");
  }
  getUserInfo() {
    this.data = {
      name: this._userName.textContent,
      about: this._userInfo.textContent,
    };
    return this.data;
  }
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
    this._avatar.src = data.avatar;
    //this._id = data._id;
  }
}
