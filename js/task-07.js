const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.value = inputEl.min
inputEl.addEventListener("input", event => {
    textEl.style.fontSize = event.currentTarget.value + "px";
});
