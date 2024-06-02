import Popup from "./Popup.js";

export default class PopupWithMenu extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
  }

  close() {
    super.close(); //функция закрытие попапа на esc, темный фон
  }

  setEventListeners() {
    super.setEventListeners(); //слушатель закрытие попапа на темный фон/крестик
    super.close();
  }
}
