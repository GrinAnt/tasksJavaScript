let input = document.querySelector(".form__num");
let color = document.querySelector(".form__color");
let list = document.querySelector(".list");

let markup = function (quantity) {
  let elem = "";

  for (let i = 0; i < quantity; i++) {
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerText = i + 1;

    elem += newItem.outerHTML;
  }

  return elem;
};

input.addEventListener("change", function (e) {
  const quantity = e.target.value;
  const elem = markup(quantity);

  list.innerHTML = elem;
});

const colorBlock = function (block, color) {
  block.style.backgroundColor = color;
};

let changed = false;

color.addEventListener("change", function (e) {
  const col = e.target.value;
  const items = list.querySelectorAll(".item");

  changed = !changed;

  for (let i = 0; i < items.length; i++) {
    const current = items[i];
    let blocknum = i + 1;

    if (changed) {
      if (blocknum % 2 !== 0) {
        colorBlock(current, col);
      } else {
        colorBlock(current, "#fff");
      }
    } else {
      if (blocknum % 2 === 0) {
        colorBlock(current, col);
      } else {
        colorBlock(current, "#fff");
      }
    }
  }
});
