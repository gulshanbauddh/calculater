const buttons = document.querySelectorAll("button");
const inputField = document.querySelector("input");
let expr = "";
const operators = ["+", "-", "*", "/", "%", "."];

const isOperator = (ch) => operators.includes(ch);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btn = button.textContent.trim();

    if (btn === "C") {
      expr = "";
      inputField.value = "";
      return;
    }

    if (btn === "DEL") {
      expr = expr.slice(0, -1);
      inputField.value = expr;
      return;
    }

    if (btn === "=") {
      try {
        if (!expr) return;
        if (isOperator(expr[expr.length - 1])) return;
        const result = eval(expr);
        expr = String(result);
        inputField.value = expr;
      } catch (err) {
        console.error(err);
        inputField.value = "Error";
        expr = "";
      }
      return;
    }

    if (isOperator(btn)) {
      if (!expr) return;
      if (isOperator(expr[expr.length - 1])) {
        expr = expr.slice(0, -1) + btn;
        inputField.value = expr;
        return;
      }
    }
    expr += btn;
    inputField.value = expr;
  });
});
