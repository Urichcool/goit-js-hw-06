const inputEl = document.querySelector("#validation-input");
const getInputAttribute = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", (event) => {
  if (inputEl.value.length === Number(getInputAttribute)) {
    event.target.classList.add("valid");
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
  } else {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
    inputEl.classList.add("invalid");
  }
});

