/* =========================================================
   YOUR SHOES - ORDER SYSTEM
========================================================= */


/* =========================================================
   PRODUCTS
========================================================= */

const products = {

    "red-sneakers": {
        name: "Classic Red Sneakers",
        category: "Sneakers",
        price: 4999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90"
    },

    "white-sneakers": {
        name: "Classic White Sneakers",
        category: "Sneakers",
        price: 5499,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=90"
    },

    "street-style": {
        name: "Street Style Shoes",
        category: "Casual",
        price: 5999,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=90"
    },

    "premium-black": {
        name: "Premium Black Shoes",
        category: "Formal",
        price: 6499,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=90"
    },

    "casual-sneakers": {
        name: "Casual Sneakers",
        category: "Casual",
        price: 4499,
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=90"
    },

    "urban-sneakers": {
        name: "Urban Sneakers",
        category: "Sneakers",
        price: 5299,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=90"
    },

    "lifestyle-shoes": {
        name: "Classic Lifestyle Shoes",
        category: "Lifestyle",
        price: 5899,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1000&q=90"
    },

    "premium-lifestyle": {
        name: "Premium Lifestyle Shoes",
        category: "Premium",
        price: 6299,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=90"
    },

    "canvas-shoes": {
        name: "Classic Canvas Shoes",
        category: "Casual",
        price: 3999,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=90"
    },

    "running-shoes": {
        name: "White Running Shoes",
        category: "Running",
        price: 5799,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=90"
    },

    "everyday-casual": {
        name: "Everyday Casual Shoes",
        category: "Casual",
        price: 4799,
        image: "https://images.unsplash.com/photo-1554130840-7f3e3e9e4d0d?auto=format&fit=crop&w=1000&q=90"
    },

    "brown-formal": {
        name: "Premium Brown Formal Shoes",
        category: "Formal",
        price: 6799,
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=90"
    },

    "sport-sneakers": {
        name: "Sport Performance Sneakers",
        category: "Sports",
        price: 6099,
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=90"
    },

    "minimal-white": {
        name: "Minimal White Shoes",
        category: "Lifestyle",
        price: 4699,
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1000&q=90"
    },

    "premium-street": {
        name: "Premium Street Sneakers",
        category: "Sneakers",
        price: 6599,
        image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?auto=format&fit=crop&w=1000&q=90"
    }

};


/* =========================================================
   URL DATA
========================================================= */

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");
const selectedSize = params.get("size");
const selectedQuantity = parseInt(params.get("quantity")) || 1;

const product = products[productId];


/* =========================================================
   ELEMENTS
========================================================= */

const orderProductImage =
    document.getElementById("orderProductImage");

const orderProductName =
    document.getElementById("orderProductName");

const orderProductCategory =
    document.getElementById("orderProductCategory");

const orderSize =
    document.getElementById("orderSize");

const orderQuantity =
    document.getElementById("orderQuantity");

const orderPrice =
    document.getElementById("orderPrice");

const orderTotal =
    document.getElementById("orderTotal");

const orderForm =
    document.getElementById("orderForm");

const orderMessage =
    document.getElementById("orderMessage");

const easypaisaBox =
    document.getElementById("easypaisaBox");

const transactionId =
    document.getElementById("transactionId");


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPrice(price) {

    return "Rs. " + Number(price).toLocaleString("en-PK");

}


/* =========================================================
   PRODUCT NOT FOUND
========================================================= */

if (!product) {

    orderProductName.textContent =
        "Product Not Found";

    orderProductCategory.textContent =
        "";

    orderPrice.textContent =
        "Rs. 0";

    orderTotal.textContent =
        "Rs. 0";

    orderProductImage.style.display =
        "none";

}


/* =========================================================
   LOAD PRODUCT
========================================================= */

else {

    const quantity =
        selectedQuantity < 1
            ? 1
            : selectedQuantity > 20
                ? 20
                : selectedQuantity;


    const total =
        product.price * quantity;


    orderProductImage.src =
        product.image;

    orderProductImage.alt =
        product.name;


    orderProductName.textContent =
        product.name;


    orderProductCategory.textContent =
        product.category;


    orderSize.textContent =
        selectedSize || "-";


    orderQuantity.textContent =
        quantity;


    orderPrice.textContent =
        formatPrice(product.price);


    orderTotal.textContent =
        formatPrice(total);


    /* Hidden fields */

    document.getElementById("hiddenProduct").value =
        product.name;


    document.getElementById("hiddenCategory").value =
        product.category;


    document.getElementById("hiddenSize").value =
        selectedSize || "";


    document.getElementById("hiddenQuantity").value =
        quantity;


    document.getElementById("hiddenPrice").value =
        product.price;


    document.getElementById("hiddenTotal").value =
        total;

}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

orderProductImage.addEventListener("error", function () {

    this.src =
        "https://placehold.co/1000x1000/f5f5f5/222?text=Product+Image";

});


/* =========================================================
   PAYMENT METHOD
========================================================= */

const paymentMethods =
    document.querySelectorAll(
        'input[name="paymentMethod"]'
    );


paymentMethods.forEach(function (payment) {

    payment.addEventListener("change", function () {

        if (this.value === "Easypaisa") {

            easypaisaBox.classList.add("show");

            transactionId.required = true;

        }

        else {

            easypaisaBox.classList.remove("show");

            transactionId.required = false;

            transactionId.value = "";

        }

    });

});


/* =========================================================
   FORM SUBMIT
========================================================= */

orderForm.addEventListener("submit", function (event) {

    event.preventDefault();


    if (!product) {

        orderMessage.textContent =
            "Product information is missing.";

        orderMessage.className =
            "order-message error";

        return;

    }


    /* Check size */

    if (!selectedSize) {

        orderMessage.textContent =
            "Please go back and select a shoe size.";

        orderMessage.className =
            "order-message error";

        return;

    }


    /* Get payment */

    const payment =
        document.querySelector(
            'input[name="paymentMethod"]:checked'
        ).value;


    /* Easypaisa validation */

    if (
        payment === "Easypaisa" &&
        transactionId.value.trim() === ""
    ) {

        orderMessage.textContent =
            "Please enter your Easypaisa transaction/reference number.";

        orderMessage.className =
            "order-message error";

        transactionId.focus();

        return;

    }


    /* Button */

    const submitButton =
        orderForm.querySelector(
            ".place-order-btn"
        );


    submitButton.disabled = true;

    submitButton.textContent =
        "Processing...";


    /*
       Here you can connect your
       Netlify Form / backend later.
    */


    setTimeout(function () {

        orderMessage.textContent =
            "Your order has been received successfully! We will contact you shortly.";

        orderMessage.className =
            "order-message success";


        submitButton.textContent =
            "Order Placed";


        orderForm.reset();


        /* Keep summary visible */

        if (product) {

            document.getElementById("hiddenProduct").value =
                product.name;

            document.getElementById("hiddenCategory").value =
                product.category;

            document.getElementById("hiddenSize").value =
                selectedSize;

            document.getElementById("hiddenQuantity").value =
                selectedQuantity;

            document.getElementById("hiddenPrice").value =
                product.price;

            document.getElementById("hiddenTotal").value =
                product.price * selectedQuantity;

        }


        easypaisaBox.classList.remove("show");

    }, 1000);

});