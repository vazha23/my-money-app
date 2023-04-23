// const username = document.querySelector(".fullName");
// const email = document.querySelector(".email");
// const password = document.querySelector(".password");
// const button = document.querySelector(".create_button");

// button.addEventListener("click", function validInputs() {
//   if (!username.value || !email.value || !password.value) {
//     return (
//       username.classList.add("red_border"),
//       email.classList.add("red_border"),
//       password.classList.add("red_border"),
//       setTimeout(() => {
//         username.classList.remove("red_border"),
//           email.classList.remove("red_border"),
//           password.classList.remove("red_border");
//       }, 3000)
//     );
//   } else {
//     function new_user() {
//       const user = {
//         fullName: username.value,
//         email: email.value,
//         password: password.value,
//       };
//       window.localStorage.setItem("newUser", JSON.stringify(user));
//     }
//     new_user();
//   }
//   username.value = "";
//   email.value = "";
//   password.value = "";

//   if (new_user) {
//     function goToSecondPage() {
//       window.location.href = "./log-in.html";
//     }
//     goToSecondPage();
//   }
// });

const username = document.querySelector(".fullName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const button = document.querySelector(".create_button");

button.addEventListener("click", function validInputs() {
  if (!username.value || !email.value || !password.value) {
    return (
      username.classList.add("red_border"),
      email.classList.add("red_border"),
      password.classList.add("red_border"),
      setTimeout(() => {
        username.classList.remove("red_border"),
          email.classList.remove("red_border"),
          password.classList.remove("red_border");
      }, 3000)
    );
  } else {
    const users = JSON.parse(window.localStorage.getItem("newUser")) || [];
    const user = {
      id: users.length + 1,
      fullName: username.value,
      email: email.value,
      password: password.value,
    };
    users.push(user);
    window.localStorage.setItem("newUser", JSON.stringify(users));
    
  }
  username.value = "";
  email.value = "";
  password.value = "";

  function goToSecondPage() {
    window.location.href = "./log-in.html";
  }
  goToSecondPage();
});
