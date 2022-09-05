function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesEl = document.getElementById("boxes")
const createButtonEl = document.querySelector("[data-create]");
const destroyButtonEl = document.querySelector("[data-destroy]");
createButtonEl.addEventListener("click", getAmount);
destroyButtonEl.addEventListener("click", destroyBoxes)

function getAmount() {
  var amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

const createBoxes = (amount) => {
  const firstElementSize = 30;
  const newObj = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1){
    const newSize = firstElementSize + i * 10;
    const newElement = document.createElement("div");
    newElement.style.cssText = `width: ${newSize}px; height: ${newSize}px; background-color: ${getRandomHexColor()}`;
    newObj.appendChild(newElement);
  }
  boxesEl.appendChild(newObj);
};

function destroyBoxes() {
  boxesEl.innerHTML = "";
}