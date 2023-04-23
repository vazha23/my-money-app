const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const loginButton = document.querySelector(".log_in_button");

loginButton.addEventListener("click", function () {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const userData = localStorage.getItem("newUser");
  const loginedUser = JSON.parse(userData) || [];

  if (!emailValue || !passwordValue) {
    return (
      emailInput.classList.add("red_border"),
      passwordInput.classList.add("red_border"),
      setTimeout(() => {
        passwordInput.classList.remove("red_border"),
          emailInput.classList.remove("red_border");
      }, 3000)
    );
  }
  const findUser = loginedUser.find(
    (user) => user.email === emailValue && user.password === passwordValue
  );
  if (!findUser) {
    return ( 
      emailInput.classList.add("red_border"),
      passwordInput.classList.add("red_border"),
      setTimeout(() => {
        passwordInput.classList.remove("red_border"),
          emailInput.classList.remove("red_border");
      }, 3000)
    );
  } else {
    window.location.href = "./add-expense.html";
  }
  const logInEdUser = {
    email: emailValue,
    pass: passwordValue,
  };
  window.localStorage.setItem("loginEdUser", JSON.stringify(logInEdUser));

  emailInput.value = "";
  passwordInput.value = "";
});
