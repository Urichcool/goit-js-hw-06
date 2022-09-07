function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
buttonEl.addEventListener("click", event => {
  const hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = hexColor;
  colorEl.textContent = hexColor ;
});
