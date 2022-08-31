const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const outputFunction = () => {
    if (inputEl.value === "") {
        outputEl.textContent = "Anonymous";
    }
    else {
        outputEl.textContent = inputEl.value;
    }
}

inputEl.addEventListener("input", outputFunction);

