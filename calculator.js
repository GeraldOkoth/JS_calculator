document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input-expression");
  const results = document.querySelector(".results");
  const chatOverlay = document.getElementsByClassName('.chat-overlay');
  const resultsArray = [];

  chatOverlay.addEventListener('click', () => {
    
  })

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
  const calculateBtn = document.querySelector('.function[data-value="="]"');
  const sinBtn = document.querySelector(".sin");
  const cosBtn = document.querySelector(".cos");
  const tanBtn = document.querySelector(".tan");

  calculateBtn.addEventListener("click", () => {
    try {
      const expression = input.value;
      const result = eval(expression);

      sinBtn.addEventListener("click", () => {
        input.value += Math.sin(input.value).toFixed(2);
        results.textContent = input.value;
      });
      cosBtn.addEventListener("click", () => {
        input.value += Math.cos(input.value).toFixed(2);
        results.textContent = result;
      });
      tanBtn.addEventListener("click", () => {
        input.value += Math.tan(input.value).toFixed(2);
        results.textContent = result;
      });
      resultsArray.push(result);
    } catch (error) {
      results.textContent = "Error: Invalid Expression";
    }
  });

  // degree to celcius conversion
  // function toCelsius(fahrenheit) {
  //   return (5 / 9) * (fahrenheit - 32);
  // }

  // PI functionality
  const piBtn = document.querySelector(".pi");

  piBtn.addEventListener("click", () => {
    input.value = +Math.PI.toFixed(2);
  });

  // clear functionality
  const clearBtn = document.querySelector(".clear-function");

  clearBtn.addEventListener("click", () => { {
      input.value = "";
      results.textContent = "";
    }
  });

  // display previous answer
  const answerBtn = document.querySelector(".answer-function");

  answerBtn.addEventListener("click", () => {
    if (resultsArray.length > 0) {
      const lastResult = resultsArray[resultsArray.length - 1];
      results.textContent = lastResult;
    }
  });

  // delete previous character
  const deleteBtn = document.querySelector(".delete-function");
  deleteBtn.addEventListener("click", () => {
    const functionMatch = input.value.match(/(deg|rad|sin|cos|tan|3.14|e)$/);
    input.value = functionMatch
      ? input.value.slice(0, -functionMatch[0].length)
      : input.value.slice(0, -1);
  });
});
