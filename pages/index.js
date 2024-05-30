// import "./index.css";
// import Api from "./../components/Api.js";
// const quotesButton = document.querySelector(".quotes__button");

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
