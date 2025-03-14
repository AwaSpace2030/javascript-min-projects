document.addEventListener("DOMContentLoaded", () => {
  let display = document.getElementById("formal");
  let screen = document.getElementById("screen");
  let buttons = document.querySelectorAll(".butn");
  let sum = document.getElementById("sum");
  let del = document.getElementById("del");
  let delback = document.getElementById("delback");
  let percent = document.getElementById("percent"); // Make sure this element exists in HTML

  // Set initial screen value to 0 when the page loads
  screen.textContent = "0";

  // Add event listener to all buttons to append their value to the display
  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let value = event.target.textContent;
      display.textContent += value;
    });
  });

  // "=" button to calculate the result
  sum.addEventListener("click", () => {
    try {
      let equation = display.textContent.replace(/[^0-9+\-*/().]/g, ""); // Remove any invalid characters
      let result = equation ? new Function("return " + equation)() : 0; // Evaluate the equation safely
      screen.textContent = Number(result.toFixed(2)); // Show result with 2 decimal places
    } catch (error) {
      screen.textContent = "Error!";
    }
  });

  // "C" button to clear the display and reset screen to 0
  del.addEventListener("click", () => {
    display.textContent = "";
    screen.textContent = "0";
  });

  // Backspace button to remove the last character
  delback.addEventListener("click", () => {
    let currentText = display.textContent;
    display.textContent = currentText.slice(0, -1); // Remove the last character

    // If display is empty, reset screen to 0
    if (display.textContent === "") {
      screen.textContent = "0";
    }
  });

  // Percentage button to calculate percentage
  percent.addEventListener("click", () => {
    let currentValue = parseFloat(display.textContent) || 0;
    let percentage = currentValue / 100;
    display.textContent = percentage;
  });
});
