const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentValue = "0";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    switch (value) {
      case "C":
        clearDisplay();
        break;
      case "=":
        calculate();
        break;
      case "←":
        backspace();
        break;
      case "%":
        append('%');
        break;
      default:
        append(value);
        break;
    }
  });
});

function append(value) {
  if (currentValue === "0" && value !== "." && value !== "%") {
    currentValue = value;
  } else {
    currentValue += value;
  }

  display.innerText = currentValue;
}

function clearDisplay() {
  currentValue = "0";
  display.innerText = currentValue;
}

function backspace() {
  if (currentValue.length > 1) {
    currentValue = currentValue.slice(0, -1);
  } else {
    currentValue = "0";
  }
  display.innerText = currentValue;
}

function calculate() {
  try {
    let expression = currentValue.replace(/%/g, "/100");
    let result = eval(expression);
    currentValue = result.toString();
    display.innerText = currentValue;
  } catch (error) {
    display.innerText = "Error";
    currentValue = "0";
  }
}
