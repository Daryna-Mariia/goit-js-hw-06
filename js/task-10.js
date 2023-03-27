function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divHtml = document.querySelector('#boxes');


const inputHtml = document.querySelector('#controls').children[0];
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');


console.log(btnDestroy)


btnCreate.addEventListener("click", createFoo);
btnDestroy.addEventListener("click", destroyFoo);


function createFoo() {
  let amount = + document.querySelector("#controls input").value;
  createDiv(amount);
}

function createDiv(amount) {
  const basSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}
function destroyFoo() {
  boxes.innerHTML = "";
}