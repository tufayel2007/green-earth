let cart = [];
let totalPrice = 0;

async function fetchProductsByCategory(categoryId) {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/category/${categoryId}`
    );
    const data = await res.json();

    if (!data || !data.data) {
      console.error("No products found or invalid data format.");
      return;
    }

    const products = data.data;
    হচ্ছে;
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

    addCartEventListeners();
  } catch (error) {
    console.error("Failed to load category products:", error);
  }
}

// Add to Cart Button-
function addCartEventListeners() {
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-product-name");
      const price = parseFloat(button.getAttribute("data-product-price"));

      const existingItem = cart.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      totalPrice += price;
      updateCart();
    });
  });
}

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
        "text-left bg-green-50 px-4 py-2 rounded hover:bg-green-200";
      if (index === 0) {
        btn.classList.add("bg-green-300", "font-bold");
      }

      btn.addEventListener("click", () => {
        // container.querySelectorAll("button").forEach((b) => {
        //   b.classList.remove("bg-green-300", "font-bold");
        // });
        // btn.classList.add("bg-green-300", "font-bold");

        fetchProductsByCategory(cat.id);
      });

      container.appendChild(btn);
    });
  } catch (error) {
    console.error("Failed to load categories:", error);
  }
}

//  Load All Products
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
                Fruit Tree
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
  } catch (error) {
    console.error("API থেকে ডেটা ফেচ করতে সমস্যা:", error);
  }
}

// ##############################################################
// ✅ নির্দিষ্ট ক্যাটাগরি থেকে প্রোডাক্ট লোড করার ফাংশন
async function fetchProductsByCategory(categoryId) {
  console.log(categoryId);
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/category/${categoryId}`
    );
    const data = await res.json();
    if (!data || !data.data) {
      console.error("No products found or invalid data format.");
      return;
    }
    const products = data.data;
    console.log("hykjbnk u ", data);
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    products.forEach((product) => {
      const card = document.createElement("div");
      console.log(product);

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

    // Add to Cart again for new button
    addCartEventListeners();
  } catch (error) {
    console.error("Failed to load category products:", error);
  }
}

// async function loadCategories() {
//   try {
//     const res = await fetch(
//       "https://openapi.programming-hero.com/api/categories"
//     );
//     const data = await res.json();
//     const categories = data.categories;
//     const container = document.getElementById("category-container");
//     container.innerHTML = "";

//     categories.forEach((cat) => {
//       const btn = document.createElement("button");
//       btn.innerText = cat.category_name;
//       btn.dataset.id = cat.category_id;
//       ("px-4 py-2 mb-2 rounded bg-green-100 hover:bg-green-200 w-full");

//       btn.addEventListener("click", () => {
//         container
//           .querySelectorAll("button")
//           .forEach((b) => b.classList.remove("bg-green-300", "font-bold"));
//         btn.classList.add("bg-green-300", "font-bold");

//         fetchProductsByCategory(cat.category_id);
//       });

//       container.appendChild(btn);
//     });

//     // if (categories.length > 0)
//     //   fetchProductsByCategory(categories[0].category_id);
//   } catch (error) {
//     console.error("Failed to load categories:", error);
//   }
// }

//  category from API
async function fetchProductsByCategory(categoryId) {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/category/${categoryId}`
    );
    const data = await res.json();

    const products = data.plants;
    console.log(data);
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    if (!products || products.length === 0) {
      container.innerHTML = `<p class="text-center text-gray-500">No Products.</p>`;
      return;
    }

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "border p-4 rounded shadow m-2";
      card.innerHTML = `
        <h3 class="font-semibold">${product.name}</h3>
        <p>${product.description || ""}</p>
        <p class="text-green-700 font-bold">৳${product.price || 0}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load category products:", error);
    document.getElementById(
      "product-container"
    ).innerHTML = `<p class="text-center text-red-500">Failed to load data</p>`;
  }
}

// Initialize

fetchProducts();
loadCategories();
