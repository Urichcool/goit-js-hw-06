const loginFormEl = document.querySelector(".login-form");
loginFormEl.addEventListener("submit", event => {
    event.preventDefault();
    const {
      elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" && password.value === ""){
    window.alert("Всі поля мають бути заповненні");
    }
    else {
    console.log(email.value, password.value);
    loginFormEl.reset();
    };
    
});
