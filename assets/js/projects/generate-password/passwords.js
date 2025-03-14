// Get all necessary HTML elements
let screen = document.getElementById("result");
let copyBtn = document.getElementById("copy-btn");
let submitBtn = document.getElementById("submit-btn");
let form = document.getElementById("form");
let digit = document.getElementById("digit");

// Access all form inputs
let range = document.getElementById("length");
let uppCase = document.getElementById("uppercase");
let lowerCase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

// Set initial value for digit display (linked to range input)
digit.innerHTML = range.value;

/* Listen for changes in the form inputs */
form.addEventListener("input", () => {
  // Update the digit display to match the range value
  digit.innerHTML = range.value;
});

/* Function to generate random characters */
function randomchar() {
  const charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charLower = "abcdefghijklmnopqrstuvwxyz";
  const sym = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~\\";
  const numberDigits = "0123456789";

  // Read the range value and convert it to an integer
  let count = parseInt(range.value);

  let result = "";
  let charArray = [];

  // Add uppercase characters if selected
  if (uppCase.checked) {
    for (let i = 0; i < Math.floor(count / 4); i++) {
      charArray.push(charUpper[Math.floor(Math.random() * charUpper.length)]);
    }
  }

  // Add lowercase characters if selected
  if (lowerCase.checked) {
    for (let i = 0; i < Math.floor(count / 4); i++) {
      charArray.push(charLower[Math.floor(Math.random() * charLower.length)]);
    }
  }

  // Add numbers if selected
  if (numbers.checked) {
    for (let i = 0; i < Math.floor(count / 4); i++) {
      charArray.push(
        numberDigits[Math.floor(Math.random() * numberDigits.length)]
      );
    }
  }

  // Add symbols if selected
  if (symbols.checked) {
    for (let i = 0; i < Math.floor(count / 4); i++) {
      charArray.push(sym[Math.floor(Math.random() * sym.length)]);
    }
  }

  // If there are still remaining characters to generate, add them randomly from all types
  let remainingCount = count - charArray.length;
  for (let i = 0; i < remainingCount; i++) {
    let randomType = Math.floor(Math.random() * 4);
    if (randomType === 0 && uppCase.checked) {
      charArray.push(charUpper[Math.floor(Math.random() * charUpper.length)]);
    } else if (randomType === 1 && lowerCase.checked) {
      charArray.push(charLower[Math.floor(Math.random() * charLower.length)]);
    } else if (randomType === 2 && numbers.checked) {
      charArray.push(
        numberDigits[Math.floor(Math.random() * numberDigits.length)]
      );
    } else if (randomType === 3 && symbols.checked) {
      charArray.push(sym[Math.floor(Math.random() * sym.length)]);
    }
  }

  // Shuffle the array to randomize the order of the characters
  charArray = charArray.sort(() => Math.random() - 0.5);

  // Join the array into a string
  result = charArray.join("");

  // Display the generated string in the result screen
  screen.innerHTML = result;
  console.log(result);
  return result;
}

/* Handle the 'Generate' button click */
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  randomchar(); // Generate and display random characters
});

/* Handle the 'Copy' button click */
copyBtn.addEventListener("click", () => {
  const copiedText = screen.innerText; // Read text from the result screen
  navigator.clipboard.writeText(copiedText); // Copy to clipboard
});
