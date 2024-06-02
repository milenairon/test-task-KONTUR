// import Api from "./../components/Api.js";

// ОТКРЫТЬ ПОПАП
import PopupWithForm from "../components/PopupWithForm.js";
import { bannerButtons } from "../utils/constants.js";

function openbell() {
  popupWithFormbell.open();
}

//Действия при Submit формы bell
const popupWithFormbell = new PopupWithForm(".popup_place_bell");
popupWithFormbell.setEventListeners();

bannerButtons.forEach((item) => item.addEventListener("click", openbell));

// БАННЕР
$(document).ready(function () {
  $(".banner__slides").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    arrowsPlacement: "beforeSlides",
    prevArrow:
      '<button type="button" class="banner__button-paging banner__button-paging_place_right" aria-label="Назад"><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="18.5" r="18.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 37 37)" fill="#FFFFFF"/><path transform="translate(26 26), rotate(180)" d="M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538407 7.31946 0.538407 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM1 9L14 9L14 7L1 7L1 9Z" fill="#22253B"/></svg></button>',
    nextArrow:
      '<button type="button" class="banner__button-paging banner__button-paging_place_left" aria-label="Вперед"><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="18.5" r="18.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 37 37)" fill="#FFFFFF"/><path transform="translate(10 10)" d="M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538407 7.31946 0.538407 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM1 9L14 9L14 7L1 7L1 9Z" fill="#22253B"/></svg></button>',
  });
});

// //Запрос
// const api = new Api({
//   url: "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=ru",
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//   },
// });

// // Вставить цитату
// function renderQuote(quote) {
//   const quotesItems = document.querySelector(".quotes__content-items");
//   const quotesItem = quotesItems.querySelector(".quotes__content-item");
//   const quotesContent = quotesItem.querySelector(".quotes__content");
//   // Первая цитата создается путем замены текста
//   if ((quotesContent.textContent === "Место под вашу цитату")) {
//     // Изменить текст "Цитата"
//     quotesContent.textContent = quote.quoteText;
//     // Изменить текст "Автор цитаты"
//     if (quote.quoteAuthor !== "") {
//       quotesItem.querySelector(
//         ".quotes__copyright"
//       ).textContent = `© ${quote.quoteAuthor}`;
//     } else {
//       quotesItem.querySelector(".quotes__copyright").textContent = "";
//     }
//   }
//   // Последующие цитаты создаются путем клонирования template-элемента и замены текста
//   else {
//     const quotesTemplate = document.querySelector("#quotes-template").content;
//     // Клонируем содержимое тега template
//     const quotesItem = quotesTemplate
//       .querySelector(".quotes__content-item")
//       .cloneNode(true);

//     // наполняем содержимым
//     // Изменить текст "Цитата"
//     quotesItem.querySelector(".quotes__content").textContent = quote.quoteText;
//     // Изменить текст "Автор цитаты"
//     if (quote.quoteAuthor !== "") {
//       quotesItem.querySelector(
//         ".quotes__copyright"
//       ).textContent = `© ${quote.quoteAuthor}`;
//     } else {
//       quotesItem.querySelector(".quotes__copyright").textContent = "";
//     }
//     // отображаем на странице
//     quotesItems.prepend(quotesItem);
//   }
// }

// // Получить цитату через сторонний сайт
// function getQuote() {
//   api
//     .getQuote() //Получить цитату
//     .then((data) => {
//       renderQuote(data);
//     })
//     .catch((error) => {
//       //если запрос не ушел
//       console.log(error);
//     });
// }

// // Действия при нажатии на кнопку
// quotesButton.addEventListener("click", getQuote);
