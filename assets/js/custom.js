/*****************************/

document.addEventListener("DOMContentLoaded", function () {
  let todaytime = document.getElementById("today-time");

  if (todaytime) {
    function getCurrentDateTime() {
      let currenttime = new Date();

      let hours = currenttime.getHours().toString().padStart(2, "0");
      let minutes = currenttime.getMinutes().toString().padStart(2, "0");
      let seconds = currenttime.getSeconds().toString().padStart(2, "0");

      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      let dateString = currenttime.toLocaleDateString("en-US", options);

      return `${dateString} | ${hours}:${minutes}:${seconds}`;
    }

    function updateTime() {
      todaytime.textContent = getCurrentDateTime();
    }

    updateTime();
    setInterval(updateTime, 1000);
  }
});
