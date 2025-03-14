/* projects data */
let projectsInfo = [
  {
    id: 1,
    title: "Digital Clock ⏰ - Displays the current time in real-time", // Project title
    Imgurl: "assets/img/time-img.jpg", // Image URL
    link: "time-clock.html", // Link to the project
  },
  {
    id: 2,
    title: " Simple Calculator 🔢 - Supports Basic Operations", // Project title
    Imgurl: "assets/img/calculator.jpg", // Image URL
    link: "Calculator.html", // Link to the project
  },
  {
    id: 3,
    title: " 📝To-Do List JavaScript Project", // Project title
    Imgurl: "assets/img/todo-img.jpg", // Image URL
    link: "To-do-list.html", // Link to the project
  },
  {
    id: 4,
    title: "🔐 Random Passwords Generator", // Project title
    Imgurl: "assets/img/password-generator.jpg", // Image URL
    link: "Generate-passwords.html", // Link to the project
  },
  {
    id: 5,
    title: "Gallery Filter 🎨🔍 ", // Project title
    Imgurl: "assets/img/gallery-img.jpg", // Image URL
    link: "Gallery-Filter.html", // Link to the project (currently not available)
  },
  {
    id: 6,
    title: "Currency Converter 💲💲",
    Imgurl: "assets/img/currency.jpg", // Image URL
    link: "currency.html", // Link to the project (currently not available)
  },
  {
    id: 7,
    title: "Random Quote Generator", // Project title
    Imgurl: "assets/img/thumbnail.jpg", // Image URL
    link: "#", // Link to the project (currently not available)
  },
  {
    id: 8,
    title: "Image Slider - JavaScript", // Project title
    Imgurl: "assets/img/thumbnail.jpg", // Image URL
    link: "#", // Link to the project (currently not available)
  },
  {
    id: 9,
    title: "Image Slider - JavaScript", // Project title
    Imgurl: "assets/img/thumbnail.jpg", // Image URL
    link: "#", // Link to the project (currently not available)
  },
  {
    id: 10,
    title: "Image Slider - JavaScript", // Project title
    Imgurl: "assets/img/thumbnail.jpg", // Image URL
    link: "#", // Link to the project (currently not available)
  },
  {
    id: 11,
    title: "Image Slider - JavaScript", // Project title
    Imgurl: "assets/img/thumbnail.jpg", // Image URL
    link: "#", // Link to the project (currently not available)
  },
  {
    id: 12,
    title: "Image Slider - JavaScript", // Project title
    Imgurl: "assets/img/thumbnail.jpg", // Image URL
    link: "#", // Link to the project (currently not available)
  },
];

// Getting the DOM elements for cards and pagination
let cards = document.getElementById("cards");
let pagination = document.getElementById("pagination");

// Pagination variables
let currentPage = 1;
let itemsPerPage = 6;

// Function to display the projects based on pagination
function displayProjects() {
  let result = "";
  let start = (currentPage - 1) * itemsPerPage; // Calculate the start index for pagination
  let end = start + itemsPerPage; // Calculate the end index for pagination
  let paginatedProjects = projectsInfo.slice(start, end); // Get the projects for the current page

  // Loop through each project and create a card element
  paginatedProjects.forEach((card) => {
    result += `
      <a href="${card.link}">
        <div class="card">
          <img src="${card.Imgurl}" alt="${card.title}" />
          <h4>${card.title}</h4>
        </div>
      </a>
    `;
  });

  cards.innerHTML = result; // Insert the generated cards into the DOM
  displayPagination(); // Call the function to display pagination buttons
}

// Function to display pagination buttons
function displayPagination() {
  let totalPages = Math.ceil(projectsInfo.length / itemsPerPage); // Calculate the total number of pages
  let buttons = "";

  // Add the 'previous' button with disabled condition if it's the first page
  buttons += `<button onclick="prevPage()" ${
    currentPage === 1 ? "disabled" : ""
  }><i class="ri-arrow-left-line"></i></button>`;

  // Loop through and create page number buttons
  for (let i = 1; i <= totalPages; i++) {
    buttons += `<button class="${
      i === currentPage ? "activebtn" : ""
    }" onclick="goToPage(${i})">${i}</button>`;
  }

  // Add the 'next' button with disabled condition if it's the last page
  buttons += `<button onclick="nextPage()" ${
    currentPage === totalPages ? "disabled" : ""
  }><i class="ri-arrow-right-line"></i></button>`;

  pagination.innerHTML = buttons; // Insert the pagination buttons into the DOM
}

// Function to go to a specific page
function goToPage(page) {
  currentPage = page; // Set the current page to the selected page
  displayProjects(); // Re-display the projects for the new page
}

// Function to go to the previous page
function prevPage() {
  if (currentPage > 1) {
    currentPage--; // Decrement the current page
    displayProjects(); // Re-display the projects for the new page
  }
}

// Function to go to the next page
function nextPage() {
  let totalPages = Math.ceil(projectsInfo.length / itemsPerPage); // Calculate total pages again
  if (currentPage < totalPages) {
    currentPage++; // Increment the current page
    displayProjects(); // Re-display the projects for the new page
  }
}

// Initially display the projects
displayProjects();
