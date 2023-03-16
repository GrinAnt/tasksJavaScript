const elemModal = document.createElement("div");
const elemClose = document.createElement("span");
const elemText = document.createElement("p");
const container = document.querySelector(".container");
let btn = document.querySelector(".btn");

function addElem(block, elem, cls, content) {
  block.appendChild(elem);
  elem.classList.add(cls);
  elem.textContent = content;
}

addElem(container, elemModal, "modal");
addElem(elemModal, elemClose, "modal__close", "X");
addElem(elemModal, elemText, "modal__text", "Hello, my modal windows!");

// Открывает модальное окно по нажатию на кнопку
btn.addEventListener("click", function () {
  elemModal.style.display = "block";
});

// Закрывает модальное окно по нажатию на крестик
elemClose.addEventListener("click", function () {
  elemModal.style.display = "none";
});

// Закрывает модальное окно по клику в любой части окна
window.addEventListener("click", function (e) {
  if (!e.target.closest(".modal") && !e.target.closest(".btn")) {
    elemModal.style.display = "none";
  }
});

// Закрывает модальное окно по нажатию ESC
window.addEventListener("keydown", function (e) {
  if (e.code == "Escape") {
    elemModal.style.display = "none";
  }
});

//
//
// let modal = document.querySelector('.modal');
// let close = document.querySelector('.modal__close');

// Закрывает модальное окно по клику в любой части окна (не срабатывает)
// window.addEventListener("click", function (e) {
//   if (e.target == elemModal) {
//     console.log("закрыл");
//     modal.style.display = "none";
//   }
// });
