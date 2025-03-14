/* Time JS O'Clock */
document.addEventListener("DOMContentLoaded", () => {
  let timedisplay = document.getElementById("timedisplay");

  function updateTime() {
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let seconds = time.getSeconds();

    // Determine AM or PM
    let period = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;

    // Update the display with formatted time
    timedisplay.textContent = `${String(hours).padStart(2, "0")}:${String(
      min
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${period}`;
  }

  // Run updateTime immediately to display time without delay
  updateTime();

  // Update time every second
  setInterval(updateTime, 1000);
});
