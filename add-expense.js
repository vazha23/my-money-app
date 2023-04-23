const income = document.querySelector("#income");
const expenses = document.querySelector("#expense");
const main = document.querySelector(".add_expense_div");
const incORexp = document.querySelector("#cards");
const category = document.querySelector("#category");

function changeCategory() {
  incORexp.value = "";
  category.value = "";
  incORexp.addEventListener("change", (e) => {
    e.preventDefault();
    if (incORexp.value === "income") {
      category.innerHTML = `
            <option value="Salary">Salary</option> 
            <option value="Invoice">Invoice</option> 
            <option value="Other">Other..</option>
            `;
    } else if (incORexp.value === "expense") {
      category.innerHTML = `
            <option value="Gym">Gym</option> 
            <option value="Health">Health</option> 
            <option value="Family">Family</option> 
            <option value="Food">Food</option>
            <option value="Travel">Travel..</option>
            <option value="Other">Other..</option>
            `;
    }
  });
}
document.addEventListener("DOMContentLoaded", changeCategory);

const button = document.querySelector(".submit_batton");
const date = document.querySelector(".date");
const money = document.querySelector(".Money");
const card = document.querySelector(".expense_card");

function validInputs() {
  if (!date.value || !money.value || !incORexp.value || !category.value) {
    return (
      card.classList.add("valid-Inputs"),
      setTimeout(() => {
        card.classList.remove("valid-Inputs");
      }, 3000)
    );
  } else {
    card.classList.add("green_inputs");
    setTimeout(() => {
      card.classList.remove("green_inputs");
    }, 3000);
  }
  const expenses =
    JSON.parse(window.localStorage.getItem("user's_expenses")) || [];
  const moneyInt = parseFloat(money.value);
  const userExpense = {
    id: expenses.length + 1,
    date: date.value,
    money: moneyInt,
    incORexp: incORexp.value,
    category: category.value,
  };
  expenses.push(userExpense);
  window.localStorage.setItem("user's_expenses", JSON.stringify(expenses));
  date.value = "";
  money.value = "";
  incORexp.value = "";
  category.value = "";
}

button.addEventListener("click", validInputs);

const userIcon = document.querySelector("#user_icon");
const userInfo = document.querySelector("#user_info_container");
const userData = document.querySelector(".user_name_container");
const userEmail = document.querySelector(".user_email_containet");
const logOut = document.querySelector(".log_out_container");
const myExpense = document.querySelector(".show_expense_container");

function hideDiv() {
  if (userInfo.style.display === "none") {
    userInfo.style.display = "block";
  } else {
    userInfo.style.display = "none";
  }
}
userIcon.addEventListener("click", function () {
  hideDiv();
});
hideDiv();

function logedUser() {
  const users = JSON.parse(localStorage.getItem("newUser"));
  const loginEd = JSON.parse(localStorage.getItem("loginEdUser"));
  const loggedUser = users.find((user) => user.email === loginEd.email);
  if (loggedUser) {
    userData.innerHTML = loggedUser.fullName;
    userEmail.innerHTML = loggedUser.email;
  } else {
    console.log(`User with email not found`);
  }
}
logedUser();

const modeButton = document.querySelector(".mode_button");

modeButton.addEventListener("click", function () {
  if (getComputedStyle(main).backgroundColor === "rgb(235, 235, 235)") {
    main.classList.add("mode");
  } else {
    main.classList.remove("mode");
  }
});

const logOutButton = document.querySelector(".log_out_button");

logOutButton.addEventListener("click", function () {
  window.location.href = "./log-in.html";
});

const myExpenseButton = document.querySelector(".my_expense_button");

myExpenseButton.addEventListener("click", function () {
  window.location.href = "./user_expense.html";
});

const myExpButton = document.querySelector(".my_expenses")
myExpButton.addEventListener("click", function(){
  window.location.href = "./user_expense.html"
})