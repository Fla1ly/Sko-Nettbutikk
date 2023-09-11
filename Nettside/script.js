// Function to redirect to the "contact.html" page
function redirectAbout() {
    window.location.href = "contact.html";
}

let imageJordan = ["ima"]

/* Array with all products */
let products = [
    {
        name: "Jordan 1's",
        Image : "images/jordan_shoe.PNG",
        tag: "jordan",
        price: 2500,
        inCart: 0
    },
    {
        name: "Jordan Travis Scott",
        tag: "jordaxtravis",
        price: 22500,
        inCart: 0
    }
];

/* Define cart-btn to "cart" and add an event listener to it */
if (window.location.pathname.includes("shoe")) {
    let cart = document.getElementById("btn-cart");
    cart.addEventListener("click", function() {
        cartNumbers(products);
        totalCost(products);
    });
}

/* Function to get the product numbers from local storage and always display it next to the cart, even if the page is refreshed */
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector(".cart-flex-parent span").textContent = productNumbers;
    }
}

/* Function to update the cart numbers in local storage */
function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart-flex-parent span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart-flex-parent span").textContent = 1;
    }

    setItems(product);
}

/* Function to set items in local storage */
function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        cartItems[product[0].tag].inCart += 1;
    } else {
        product[0].inCart = 1;
        cartItems = {
            [product[0].tag]: product
        };
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

/* Function to calculate the total cost in the cart */
function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
    console.log("My cartCost is", cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product[0].price);
    } else {
        localStorage.setItem("totalCost", product[0].price);
    }
}

/* Code to check if there is any item in local storage and display it on "cart.html" */
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector
        (".products")

    console.log(cartItems)
    if (cartItems) {
        let cartCost = localStorage.getItem("totalCost");
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
                </svg>
                <img src="images/jordan_shoe.png">
                <span>${item[0].name}</span>
            </div>
            <div class="price">kr${item[0].price},00</div>
            <div class="quantity">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M5 12l4 4"></path>
                <path d="M5 12l4 -4"></path>
                </svg>
                <span>${item[0].inCart}</span>
                <svg xmlns="http://www.w3.org/2000/svg" onclick="incrementValue()" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M15 16l4 -4"></path>
                <path d="M15 8l4 4"></path>
                </svg>
            </div>
            <div id="total" class="total">
            ${cartCost}
            </div>
            `
            ;
        });
    }
}

/* prøvde å lage en fuknsjon for svg i cart for å increase eller decrease amount of shoes */

function incrementValue() {
    item[0].price + 2500
}

onLoadCartNumbers();
displayCart();