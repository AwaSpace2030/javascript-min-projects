// API URL to fetch exchange rates
const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD"; // This can be changed based on the API being used
let btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", () => {
  // Get values from the user
  let amount = document.getElementById("amount").value;
  let fromCurrency = document.getElementById("fromCurrency").value; // The currency to convert from
  let toCurrency = document.getElementById("toCurrency").value; // The currency to convert to

  // Fetch exchange rates from the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extract rates from the fetched data
      let rateFrom = data.rates[fromCurrency]; // Rate of the original currency
      let rateTo = data.rates[toCurrency]; // Rate of the target currency

      // Calculate the converted amount
      let convertedAmount = (amount * rateTo) / rateFrom;

      // Display the result on the UI
      if (amount != "") {
        display.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
      } else {
        display.innerHTML = "0.0";
      }
    })
    .catch((error) => {
      display.innerHTML =
        "An error occurred while fetching the data. Please try again!";
      console.error(error);
    });
});
