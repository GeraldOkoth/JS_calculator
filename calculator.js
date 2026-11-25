document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input-expression");
  const results = document.querySelector(".results");
  const calcUpper = document.querySelector('.calc-upper');
  const span = document.createElement('span');
  span.id = 'angle_Mode';
  const angle_Mode = document.getElementById('angle_Mode');
  const resultsArray = [];
  let angleMode = "deg";

  const appendExpression = (value) => {
    input.value += value;
  };

  const numericBtns = document.querySelectorAll(".numeric");
  const operatorBtns = document.querySelectorAll(".operator");

  operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      appendExpression(btn.dataset.value);
    });
  });

  numericBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.value;

      if (value === "deg") {
        angleMode = "deg";
        results.textContent = "DEG";
        angle_Mode.textContent = 'deg';
        calcUpper.appendChild(angle_Mode);
      } else if (value === "rad") {
        angleMode = "rad";
        results.textContent = "RAD";
        angle_Mode.textContent = 'rad';
      } else if (value === "pi") {
        appendExpression("pi");
      } else if (["sin", "cos", "tan", "sec", "csc", "cot", "ln", "log", "sqrt"].includes(value)) {
        appendExpression(`${value}(`);
      } else if (value === "e") {
        appendExpression("e");
      } else {
        appendExpression(value);
      }
    });
  });

  const tokenize = (expression) => {
    const tokens = [];
    let index = 0;

    while (index < expression.length) {
      const character = expression[index];

      if (/\s/.test(character)) {
        index += 1;
      } else if (/[0-9.]/.test(character)) {
        const match = expression.slice(index).match(/^(\d+\.?\d*|\.\d+)/);
        if (!match) throw new Error("Invalid number");
        tokens.push({ type: "number", value: Number(match[0]) });
        index += match[0].length;
      } else if (/[a-z]/i.test(character)) {
        const match = expression.slice(index).match(/[a-z]+/i);
        tokens.push({ type: "identifier", value: match[0].toLowerCase() });
        index += match[0].length;
      } else if ("+-*/^()".includes(character)) {
        tokens.push({ type: character, value: character });
        index += 1;
      } else {
        throw new Error("Invalid character");
      }
    }

    tokens.push({ type: "end", value: "" });
    return tokens;
  };

  const evaluateExpression = (expression) => {
    if (!expression.trim()) throw new Error("Empty expression");

    const tokens = tokenize(expression);
    let position = 0;

    const current = () => tokens[position];
    const consume = (type) => {
      if (current().type !== type) throw new Error("Invalid expression");
      position += 1;
    };

    const parsePrimary = () => {
      const token = current();

      if (token.type === "number") {
        position += 1;
        return token.value;
      }

      if (token.type === "identifier") {
        position += 1;

        if (token.value === "pi") return Math.PI;
        if (token.value === "e") return Math.E;

        const functions = ["sin", "cos", "tan", "sec", "csc", "cot", "ln", "log", "sqrt"];
        if (!functions.includes(token.value)) throw new Error("Unknown function");

        consume("(");
        const argument = parseExpression();
        consume(")");

        const radians = angleMode === "deg" ? argument * (Math.PI / 180) : argument;
        let value;

        if (token.value === "sin") value = Math.sin(radians);
        if (token.value === "cos") value = Math.cos(radians);
        if (token.value === "tan") value = Math.tan(radians);
        if (token.value === "sec") value = 1 / Math.cos(radians);
        if (token.value === "csc") value = 1 / Math.sin(radians);
        if (token.value === "cot") value = 1 / Math.tan(radians);
        if (token.value === "ln") value = Math.log(argument);
        if (token.value === "log") value = Math.log10(argument);
        if (token.value === "sqrt") value = Math.sqrt(argument);

        return value;
      }

      if (token.type === "(") {
        position += 1;
        const value = parseExpression();
        consume(")");
        return value;
      }

      throw new Error("Invalid expression");
    };

    const parseUnary = () => {
      if (current().type === "+") {
        position += 1;
        return parseUnary();
      }
      if (current().type === "-") {
        position += 1;
        return -parseUnary();
      }
      return parsePrimary();
    };

    const parsePower = () => {
      const left = parseUnary();
      if (current().type === "^") {
        position += 1;
        return left ** parsePower();
      }
      return left;
    };

    const parseMultiplication = () => {
      let value = parsePower();
      while (current().type === "*" || current().type === "/") {
        const operator = current().type;
        position += 1;
        const right = parsePower();
        if (operator === "*" || right !== 0) {
          value = operator === "*" ? value * right : value / right;
        } else {
          throw new Error("Division by zero");
        }
      }
      return value;
    };

    const parseAddition = () => {
      let value = parseMultiplication();
      while (current().type === "+" || current().type === "-") {
        const operator = current().type;
        position += 1;
        const right = parseMultiplication();
        value = operator === "+" ? value + right : value - right;
      }
      return value;
    };

    const parseExpression = parseAddition;
    const result = parseExpression();

    if (current().type !== "end") throw new Error("Invalid expression");
    if (!Number.isFinite(result)) throw new Error("Result is not a finite number");
    return result;
  };

  const formatResult = (value) =>
    Object.is(value, -0) ? "0" : Number(value.toPrecision(12)).toString();

  const calculateBtn = document.querySelector(".equal-btn");
  calculateBtn.addEventListener("click", () => {
    try {
      const result = evaluateExpression(input.value);
      const formatted = formatResult(result);
      results.textContent = formatted;
      input.value = formatted;
      resultsArray.push(formatted);
    } catch (error) {
      results.textContent = "Error";
    }
  });

  const clearBtn = document.querySelector(".clear-function");
  clearBtn.addEventListener("click", () => {
    input.value = "";
    results.textContent = "";
  });

  const answerBtn = document.querySelector(".answer-function");
  answerBtn.addEventListener("click", () => {
    if (resultsArray.length > 0) {
      const lastResult = resultsArray[resultsArray.length - 1];
      appendExpression(lastResult);
      results.textContent = "";
    }
  });

  const deleteBtn = document.querySelector(".delete-function");
  deleteBtn.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
  });

  const aiChatInput = document.getElementById("aichat");
  const aiSubmitMessageBtn = document.querySelector(".btn-submit");
  const chatInputpara = document.getElementById("para");
  const chatOverlay = document.querySelector(".chat-overlay");
  const chatBox = document.querySelector(".chat-box");
  chatOverlay.addEventListener("click", () => {
    chatBox.style.display =
      window.getComputedStyle(chatBox).display === "none" ? "block" : "none";
  });

  aiSubmitMessageBtn.addEventListener("click", () => {
    chatInputpara.textContent = aiChatInput.value;
  });
});
