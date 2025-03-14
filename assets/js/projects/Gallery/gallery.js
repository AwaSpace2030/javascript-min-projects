const products = [
  {
    image: "assets/img/Gallery/bannana.jpg",
    name: "Banana",
    price: "20$",
    category: "fruits",
  },
  {
    image: "assets/img/Gallery/apple.jpg",
    name: "Apple",
    price: "25$",
    category: "fruits",
  },
  {
    image: "assets/img/Gallery/burger.jpg",
    name: "Burger",
    price: "10$",
    category: "fast",
  },
  {
    image: "assets/img/Gallery/pizza.jpg",
    name: "Pizza",
    price: "12$",
    category: "fast",
  },
  {
    image: "assets/img/Gallery/salad.jpg",
    name: "Salad",
    price: "15$",
    category: "healthy",
  },
  {
    image: "assets/img/Gallery/grilled.jpg",
    name: "Grilled Chicken",
    price: "20$",
    category: "healthy",
  },
  {
    image: "assets/img/Gallery/coke.jpg",
    name: "Coke",
    price: "5$",
    category: "drinks",
  },
  {
    image: "assets/img/Gallery/juice.jpg",
    name: "Juice",
    price: "8$",
    category: "drinks",
  },
];

let itemsGroup = document.getElementById("gallery-group");

function filterProducts(category) {
  let collect = "";

  // Loop through each product to display based on the selected category
  products.forEach((item) => {
    // If the category is '*' (All), or the item category matches the selected category
    if (category === "*" || item.category === category) {
      collect += `<div class="gallery-item ${item.category}">
                  <img src="${item.image}" alt="${item.name}">
                  <p>${item.name} <span>${item.price}</span></p>
                </div>
                `;
    }
  });

  // Update the gallery with the filtered products
  itemsGroup.innerHTML = collect;

  // Add a class to show items after the content is loaded
  setTimeout(() => {
    let items = document.querySelectorAll(".gallery-item");
    items.forEach((item) => {
      item.classList.add("show");
    });
  }, 10);
}

// Call the filter function with '*' to show all products by default
filterProducts("*");
