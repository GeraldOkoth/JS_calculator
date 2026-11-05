document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("expression");
  const results = document.querySelector(".results");

  // append to input functionality
  const numericBtns = document.querySelectorAll(".numeric");
  const operatorBtns = document.querySelectorAll(".operator");

  operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      input.value += btn.dataset.value;
    });
  });

  numericBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      input.value += btn.dataset.value;
    });
  });

  // calculate funtionality
  const calculateBtn = document.querySelector('.function[data-value="="]');
  calculateBtn.addEventListener("click", () => {
    try {
      const expression = input.value;
      const result = eval(expression);
      results.textContent = result;
    } catch (error) {
      results.textContent = "Error: Invalid Expression";
    }
  });

  // clear functionality
  const clearBtn = document.querySelector(".clear-function");

  clearBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear the input?")) {
      input.value = "";
      results.textContent = "";
    }
  });
});
