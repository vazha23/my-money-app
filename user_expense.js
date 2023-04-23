const menuIcon = document.querySelector(".fa-bars");
const userInterface = document.querySelector(".user_interface_container");
const aboutUs = document.querySelector(".about_us_container");
const questionIcon = document.querySelector(".fa-question");
const userName = document.querySelector(".user_name_container");
const userEmail = document.querySelector(".user_email_containet");
const modeButton = document.querySelector(".mode_button");
const body = document.querySelector(".body");
// userdata div
function hideDiv() {
  const data = window.localStorage.getItem("newUser");
  const user = JSON.parse(data);
  if (userInterface.style.display === "none") {
    userInterface.style.display = "block";
  } else {
    userInterface.style.display = "none";
  }
}
const users = JSON.parse(localStorage.getItem("newUser"));
const loginEd = JSON.parse(localStorage.getItem("loginEdUser"));

function logedUser() {
  const loggedUser = users.find((user) => user.email === loginEd.email);
  if (loggedUser) {
    userName.innerHTML = loggedUser.fullName;
    userEmail.innerHTML = loggedUser.email;
  }
}
logedUser();
hideDiv();
menuIcon.addEventListener("click", function () {
  hideDiv();
});

function showQuestion() {
  if (aboutUs.style.display === "none") {
    aboutUs.style.display = "block";
  } else {
    aboutUs.style.display = "none";
  }
}
showQuestion();

questionIcon.addEventListener("click", function () {
  showQuestion();
});

const addExpenseButton = document.querySelector(".add_expense_button");
const logOutButton = document.querySelector(".log_out_button");
addExpenseButton.addEventListener("click", function () {
  window.location.href = "./add-expense.html";
});
logOutButton.addEventListener("click", function () {
  window.location.href = "./log-in.html";
}); 
// added expenses
const expenseCard = document.querySelector(".my_expenses_container");
const addUserExp = JSON.parse(localStorage.getItem("user's_expenses"));

const newExpenseItems = addUserExp.map((item) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `${item.date}__${item.category} $:${item.money} __${item.incORexp} `;
  return newDiv;
});

newExpenseItems.forEach((item) => expenseCard.appendChild(item));

// fillter expenses and incomes
const expButton = document.querySelector(".expense_button");
const incButton = document.querySelector(".income_button");
const totalButton = document.querySelector(".total_button");

function displayExpenses(expenses) {
  expenseCard.innerHTML = "";

  expenses.forEach((expense, index) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `${expense.date}__${expense.category}$:${expense.money} __${expense.incORexp} <button class="delete_button" data-index="${index}">x</button>`;
    expenseCard.appendChild(newDiv);
  });

  const deleteButtons = document.querySelectorAll(".delete_button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.dataset.index;
      addUserExp.splice(index, 1);
      localStorage.setItem("user's_expenses", JSON.stringify(addUserExp));
      displayExpenses(addUserExp);
    });
  });
}

expButton.addEventListener("click", () => {
  expButton.classList.add("clickedButton");
  incButton.classList.remove("clickedButton");
  totalButton.classList.remove("clickedButton");

  const filterExpenses = addUserExp.filter((expense) => {
    return expense.incORexp === "expense";
  });

  displayExpenses(filterExpenses);
});

incButton.addEventListener("click", () => {
  incButton.classList.add("clickedButton");
  expButton.classList.remove("clickedButton");
  totalButton.classList.remove("clickedButton");

  const filterIncomes = addUserExp.filter((income) => {
    return income.incORexp === "income";
  });

  displayExpenses(filterIncomes);
});

totalButton.addEventListener("click", () => {
  totalButton.classList.add("clickedButton");
  incButton.classList.remove("clickedButton");
  expButton.classList.remove("clickedButton");

  const totalInc = addUserExp.reduce((accumulator, current) => {
    if (current.incORexp === "income") {
      return accumulator + current.money;
    } else {
      return accumulator;
    }
  }, 0);

  const totalExp = addUserExp.reduce((accumulator, current) => {
    if (current.incORexp === "expense") {
      return accumulator + current.money;
    } else {
      return accumulator;
    }
  }, 0);

  const Cash = totalInc - totalExp;
  expenseCard.innerHTML = `
    <div>Total income: $${totalInc}</div>
    <div>Total expense: $${totalExp}</div>
    <div>Cash: $${Cash}</div>
  `;
});
modeButton.addEventListener("click", function () {
  if (getComputedStyle(body).backgroundColor==="rgb(255, 253, 253)") {
    body.classList.add("mode");
  } else {
    body.classList.remove("mode");
  }
});
 