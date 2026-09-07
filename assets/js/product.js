/* =========================================================
   YOUR SHOES - PRODUCT SYSTEM
========================================================= */


/* =========================================================
   PRODUCTS
========================================================= */

const products = {

    "red-sneakers": {
        name: "Classic Red Sneakers",
        category: "Sneakers",
        price: 4999,
        label: "NEW",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90",
        description: "Stylish classic red sneakers designed for everyday comfort and casual wear."
    },

    "white-sneakers": {
        name: "Classic White Sneakers",
        category: "Sneakers",
        price: 5499,
        label: "",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=90",
        description: "Clean and versatile white sneakers that look great with almost every outfit."
    },

    "street-style": {
        name: "Street Style Shoes",
        category: "Casual",
        price: 5999,
        label: "POPULAR",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=90",
        description: "Modern street-style shoes made for a comfortable and confident everyday look."
    },

    "premium-black": {
        name: "Premium Black Shoes",
        category: "Formal",
        price: 6499,
        label: "",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=90",
        description: "Premium black shoes with a clean design suitable for formal and smart occasions."
    },

    "casual-sneakers": {
        name: "Casual Sneakers",
        category: "Casual",
        price: 4499,
        label: "",
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=90",
        description: "Comfortable casual sneakers perfect for daily use, walking and relaxed outings."
    },

    "urban-sneakers": {
        name: "Urban Sneakers",
        category: "Sneakers",
        price: 5299,
        label: "NEW",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=90",
        description: "Fresh urban sneakers combining modern style with everyday comfort."
    },

    "lifestyle-shoes": {
        name: "Classic Lifestyle Shoes",
        category: "Lifestyle",
        price: 5899,
        label: "",
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1000&q=90",
        description: "Classic lifestyle shoes designed for comfortable everyday wear."
    },

    "premium-lifestyle": {
        name: "Premium Lifestyle Shoes",
        category: "Premium",
        price: 6299,
        label: "SALE",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=90",
        description: "Premium lifestyle footwear with a stylish design and comfortable fit."
    },

    "canvas-shoes": {
        name: "Classic Canvas Shoes",
        category: "Casual",
        price: 3999,
        label: "NEW",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=90",
        description: "Lightweight canvas shoes with a simple and timeless casual design."
    },

    "running-shoes": {
        name: "White Running Shoes",
        category: "Running",
        price: 5799,
        label: "",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=90",
        description: "Lightweight running shoes designed for active days and comfortable movement."
    },

    "everyday-casual": {
        name: "Everyday Casual Shoes",
        category: "Casual",
        price: 4799,
        label: "POPULAR",
        image: "https://images.unsplash.com/photo-1554130840-7f3e3e9e4d0d?auto=format&fit=crop&w=1000&q=90",
        description: "Reliable everyday shoes that provide comfort and easy styling."
    },

    "brown-formal": {
        name: "Premium Brown Formal Shoes",
        category: "Formal",
        price: 6799,
        label: "",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=90",
        description: "Elegant brown formal shoes for professional and special occasions."
    },

    "sport-sneakers": {
        name: "Sport Performance Sneakers",
        category: "Sports",
        price: 6099,
        label: "NEW",
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=90",
        description: "Sport-inspired sneakers designed for active lifestyles and everyday comfort."
    },

    "minimal-white": {
        name: "Minimal White Shoes",
        category: "Lifestyle",
        price: 4699,
        label: "SALE",
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1000&q=90",
        description: "Minimal white shoes with a clean design for modern everyday outfits."
    },

    "premium-street": {
        name: "Premium Street Sneakers",
        category: "Sneakers",
        price: 6599,
        label: "POPULAR",
        image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?auto=format&fit=crop&w=1000&q=90",
        description: "Premium street sneakers created for a bold modern look and daily comfort."
    }

};


/* =========================================================
   GET PRODUCT ID
========================================================= */

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("id");

const product = products[productId];


/* =========================================================
   GET ELEMENTS
========================================================= */

const productImage = document.getElementById("productImage");

const productName = document.getElementById("productName");

const productCategory = document.getElementById("productCategory");

const productPrice = document.getElementById("productPrice");

const productDescription = document.getElementById("productDescription");

const productLabel = document.getElementById("productLabel");

const breadcrumbProduct = document.getElementById("breadcrumbProduct");

const productSize = document.getElementById("productSize");

const productQuantity = document.getElementById("productQuantity");

const productTotal = document.getElementById("productTotal");

const minusBtn = document.getElementById("minusBtn");

const plusBtn = document.getElementById("plusBtn");

const buyNowBtn = document.getElementById("buyNowBtn");


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPrice(price) {

    return "Rs. " + price.toLocaleString("en-PK");

}


/* =========================================================
   PRODUCT NOT FOUND
========================================================= */

if (!product) {

    productName.textContent = "Product Not Found";

    productDescription.textContent =
        "Sorry, the product you are looking for does not exist.";

    productImage.style.display = "none";

    productPrice.textContent = "";

    productCategory.textContent = "";

    productLabel.style.display = "none";

}


/* =========================================================
   LOAD PRODUCT
========================================================= */

else {

    productImage.src = product.image;

    productImage.alt = product.name;

    productName.textContent = product.name;

    productCategory.textContent = product.category;

    productPrice.textContent = formatPrice(product.price);

    productDescription.textContent = product.description;

    breadcrumbProduct.textContent = product.name;


    if (product.label) {

        productLabel.textContent = product.label;

        productLabel.style.display = "block";

    }

    else {

        productLabel.style.display = "none";

    }


    updateTotal();

}


/* =========================================================
   IMAGE ERROR FALLBACK
========================================================= */

productImage.addEventListener("error", function () {

    console.log("Product image could not load.");

    this.src =
        "https://placehold.co/1000x1000/f5f5f5/222?text=Product+Image";

});


/* =========================================================
   UPDATE TOTAL
========================================================= */

function updateTotal() {

    if (!product) {
        return;
    }


    let quantity = parseInt(productQuantity.value);


    if (isNaN(quantity) || quantity < 1) {

        quantity = 1;

    }


    if (quantity > 20) {

        quantity = 20;

    }


    productQuantity.value = quantity;


    const total =
        product.price * quantity;


    productTotal.textContent =
        formatPrice(total);

}


/* =========================================================
   PLUS BUTTON
========================================================= */

plusBtn.addEventListener("click", function () {

    let quantity =
        parseInt(productQuantity.value) || 1;


    if (quantity < 20) {

        quantity++;

        productQuantity.value =
            quantity;

        updateTotal();

    }

});


/* =========================================================
   MINUS BUTTON
========================================================= */

minusBtn.addEventListener("click", function () {

    let quantity =
        parseInt(productQuantity.value) || 1;


    if (quantity > 1) {

        quantity--;

        productQuantity.value =
            quantity;

        updateTotal();

    }

});


/* =========================================================
   MANUAL QUANTITY
========================================================= */

productQuantity.addEventListener("input", function () {

    let quantity =
        parseInt(this.value);


    if (isNaN(quantity)) {
        return;
    }


    if (quantity < 1) {

        quantity = 1;

    }


    if (quantity > 20) {

        quantity = 20;

    }


    this.value = quantity;

    updateTotal();

});


/* =========================================================
   BUY NOW
   PRODUCT → ORDER PAGE
========================================================= */

buyNowBtn.addEventListener("click", function () {

    if (!product) {
        return;
    }


    /* -------------------------
       CHECK SIZE
    ------------------------- */

    if (productSize.value === "") {

        alert("Please select your shoe size first.");

        productSize.focus();

        return;

    }


    /* -------------------------
       GET QUANTITY
    ------------------------- */

    let quantity =
        parseInt(productQuantity.value) || 1;


    if (quantity < 1) {
        quantity = 1;
    }


    if (quantity > 20) {
        quantity = 20;
    }


    /* -------------------------
       CREATE ORDER URL
    ------------------------- */

    const orderURL =
        "order.html?id=" +
        encodeURIComponent(productId) +
        "&size=" +
        encodeURIComponent(productSize.value) +
        "&quantity=" +
        encodeURIComponent(quantity);


    /* -------------------------
       GO TO ORDER PAGE
    ------------------------- */

    window.location.href = orderURL;

});