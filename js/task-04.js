const decrementButton = document.querySelector("[data-action = decrement]");
const incrementButton = document.querySelector("[data-action = increment]");
const valueEl = document.querySelector("#value");
let couterValue = 0;

const couterObjOfMethods = {
  increment() {
    couterValue += 1;
  },
  decrement() {
    couterValue -= 1;
  }
};


decrementButton.addEventListener("click", () => {
    couterObjOfMethods.decrement();
    valueEl.textContent = couterValue;
});
incrementButton.addEventListener("click", () => {
couterObjOfMethods.increment();
    valueEl.textContent = couterValue;
});


