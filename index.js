let cart = [];
let totalPrice = 0;

async function fetchProductsByCategory(categoryId) {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/category/${categoryId}`
    );
    const data = await res.json();

    if (!data || !data.plants) {
      console.error("No products found or invalid data format.");
      return;
    }
    console.log(data);
    const products = data.plants;

    console.log("Products: ", products);

    const container = document.getElementById("product-container");
    container.innerHTML = "";

    if (products.length === 0) {
      container.innerHTML = `<p class="col-span-3 text-center text-gray-500">No products found in this category.</p>`;
      return;
    }

    products.forEach((product) => {
      const card = document.createElement("div");

      card.innerHTML = `
        <div class="max-w-xs flex flex-col justify-between rounded-lg shadow-lg p-4 m-4">
          <div>
            <div class="h-40 bg-gray-200 rounded-md overflow-hidden">
              <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mt-4">${product.name}</h3>
            <p class="text-sm text-gray-600 mt-2 line-clamp-3">${product.description}</p>
          </div>
          <div>
            <div class="flex justify-between items-center mt-4">
              <span class="inline-block bg-green-200 text-green-800 text-sm font-semibold px-2 py-1 rounded-full">
                ${product.category}
              </span>
              <span>৳${product.price}</span>
            </div>
            <button
              class="add-to-cart bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition mt-3 w-full"
              data-product-name="${product.name}"
              data-product-price="${product.price}">
              Add to Cart
            </button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    // addCartEventListeners();
  } catch (error) {
    console.error("Failed to load category products:", error);
  }
}

// ################################# Add to Cart Button ###############################################

// ✅ Load Categories
async function loadCategories() {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/categories"
    );
    const data = await res.json();
    const categories = data.categories;
    const container = document.getElementById("category-container");
    container.innerHTML = "";

    categories.forEach((cat, index) => {
      const btn = document.createElement("button");
      btn.innerText = cat.category_name;
      btn.className =
        "text-left bg-green-50 px-4 py-2 rounded hover:bg-green-200 w-full";

      if (index === 0) {
        btn.classList.add("bg-green-300", "font-bold");
      }

      btn.addEventListener("click", () => {
        const allButtons = container.querySelectorAll("button");
        allButtons.forEach((b) => {
          b.classList.remove("bg-green-300", "font-bold");
        });

        btn.classList.add("bg-green-300", "font-bold");

        fetchProductsByCategory(cat.id);
      });

      container.appendChild(btn);
    });
  } catch (error) {
    console.error("Failed to load categories:", error);
  }
}

// ####################################################################################################################### cart btn##############################################
document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("product-container");
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTotal = document.querySelector(".cart-total");

  let total = 0;

  // Event delegation to handle dynamically added buttons
  productContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart")) {
      const button = event.target;
      const name = button.getAttribute("data-product-name");
      const price = parseInt(button.getAttribute("data-product-price"));

      // Add item to cart
      const cartItem = document.createElement("div");
      cartItem.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "mb-2",
        "bg-green-100",
        "p-2",
        "rounded"
      );

      cartItem.innerHTML = `
        <span>${name}</span>
        <span>৳${price}</span>
        <button class="remove-btn text-red-500 font-bold">Remove</button>
      `;

      cartItemsContainer.appendChild(cartItem);

      total += price;
      cartTotal.textContent = `৳${total}`;

      alert(`${name} কার্টে যোগ হয়েছে!`);
    }
  });

  // Handle removal of items from the cart
  cartItemsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
      const cartItem = event.target.closest("div");
      const price = parseInt(
        cartItem.querySelector("span:nth-child(2)").textContent.slice(1)
      );

      cartItemsContainer.removeChild(cartItem);

      total -= price;
      cartTotal.textContent = `৳${total}`;

      alert("আইটেমটি কার্ট থেকে মুছে ফেলা হয়েছে!");
    }
  });
});

//  Load All Products###################################################################################################################################
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/plants"
    );
    const data = await response.json();
    const products = data.plants;
    console.log(products);

    const container = document.getElementById("product-container");

    container.className =
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch col-span-3";
    container.innerHTML = "";

    products.forEach((product) => {
      const card = document.createElement("div");

      card.innerHTML = `
        <div class=" bg-white max-w-xs flex flex-col justify-between rounded-lg shadow-lg p-4 m-4">
          <div>
            <div class="h-40 bg-gray-200 rounded-md overflow-hidden">
              <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mt-4">${product.name}</h3>
            <p class="text-sm text-gray-600 mt-2 line-clamp-3">${product.description}</p>
          </div>
          <div>
            <div class="flex justify-between items-center mt-4">
              <span class="inline-block bg-green-200 text-green-800 text-sm font-semibold px-2 py-1 rounded-full">
                Fruit Tree
              </span>
              <span>৳${product.price}</span>
            </div>
            <button 
            id ="yuorCartBTN"
              class="add-to-cart bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition mt-3 w-full"
              data-product-name="${product.name}" 
              data-product-price="${product.price}">
              Add to Cart
            </button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("API থেকে ডেটা ফেচ করতে সমস্যা:", error);
  }
}

fetchProducts();
loadCategories();
