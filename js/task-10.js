const boxesEl = document.getElementById("boxes");
const createButtonEl = document.querySelector("[data-create]");
const destroyButtonEl = document.querySelector("[data-destroy]");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


function createBoxes(amount) {
  const newArr = [];
  for (let i = 0; i < amount; i += 1) {
    const newElement = document.createElement("div");
    newElement.style.cssText = `width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${getRandomHexColor()}`;
    newArr.push(newElement);
  }
  return newArr;
};

function destroyBoxes() {
  boxesEl.innerHTML = "";
};


createButtonEl.addEventListener("click", (event) => {
  const amount = document.querySelector("#controls input").value;
  destroyBoxes();
  let newBoxesToAdd = createBoxes(amount);
  boxesEl.append(...newBoxesToAdd);
});

destroyButtonEl.addEventListener("click", destroyBoxes);