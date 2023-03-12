export class UserInfo {
  constructor(nameSelector, infoSelector) {
    this._profile = document.querySelector(".profile");
    this._userName = this._profile.querySelector(nameSelector);
    this._userInfo = this._profile.querySelector(infoSelector);
  }
  getUserInfo() {
    this.data = {
      name: this._userName.textContent,
      info: this._userInfo.textContent,
    };
    return this.data;
  }
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.info;
  }
}
