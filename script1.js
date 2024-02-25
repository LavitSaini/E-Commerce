// Home Page Javascript

// Array of all items from each category
let allItems = productsData.map((sec) => sec.items).flat(1);

// Accessing products container box
let productsBox = document.querySelector(".products-sections-box");

// function to show all the products
function displayAllProducts(array) {
  let clutter = ``;
  let count = -1;
  array.forEach((sec) => {
    clutter += `<section class="products-section">
    <h2>${sec.category}</h2>
    <div class="products-cards grid grid-template-columns">
    ${sec.items
      .map((prod) => {
        count++;
        prod.product_Id = count;
        return `<div class="product-card product-card-part flex flex-direction align-center" data-id="${count}">
          <div class="product-img product-card-part" data-id="${count}">
              <img src="${prod.url}"
                alt="${prod.name}" class="product-card-part" data-id="${count}">
          </div>
          <div class="product-content product-card-part flex justify-between" data-id="${count}">
              <div class="product-title product-card-part" data-id="${count}">
                  <h3 class="product-card-part" data-id="${count}">${prod.name}</h3>
                  <p class="product-card-part" data-id="${count}">${prod.description}</p>
              </div>
              <div class="product-price product-card-part text-center" data-id="${count}">
                <div class="flex product-card-part" data-id="${count}">
                  <i class="fa fa-inr product-card-part" aria-hidden="true" data-id="${count}"></i>
                  <h4 class="product-card-part" data-id="${count}">${prod.price}</h4>
                </div>
                <i class="add fa-solid fa-plus" data-id="${count}"></i>
              </div>
          </div>
        </div>`;
      })
      .join("")}
    </div>  
  </section> `;
  });
  productsBox.innerHTML = clutter;
}

displayAllProducts(productsData);

// Accessing Search Results Root Element
let searchResultRoot = document.querySelector(".search-result");

// function to display the list of search results
function displaySearchResults(array) {
  searchResultRoot.innerHTML = "";
  array.forEach((item) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    let span = document.createElement("span");

    i.classList.add("fa-solid");
    i.classList.add("fa-magnifying-glass");
    span.innerText = item.name;

    li.append(i, span);
    searchResultRoot.append(li);

    li.addEventListener('click', () => {
      let targetedProductId = item.product_Id;
      localStorage.setItem('clickedProductId', targetedProductId);
      if(window.location.href.endsWith('index.html')){
        let hrefSplitedArray = window.location.href.split('/');
        hrefSplitedArray.forEach((href, index) => {
          if(href.includes('index.html')){
             hrefSplitedArray.splice(index, 1);
          }
        });
        window.location.href = hrefSplitedArray.join('/');
      }
      window.location.href += `product.html`;
    })
  });
}

let resultArr = [];

// function to handle the value of input search box
function handleInput(e) {
  let val = e.target.value;
  if (val !== "") {
    resultArr = allItems.filter((item) =>
      item.name.toLowerCase().startsWith(val)
    );
    displaySearchResults(resultArr);
  } else if (val === "") {
    resultArr.length = 0;
    displaySearchResults(resultArr);
  }
}

let searchBox = document.querySelector(".search-box");

searchBox.addEventListener("input", handleInput);

// Accessing close button of search element
let delSearch = document.querySelector(".search-del-btn");

delSearch.addEventListener("click", () => {
  searchBox.value = "";
  resultArr.length = 0;
  displaySearchResults(resultArr);
});

searchBox.addEventListener("focus", (e) => {
  delSearch.style.display = "inline-block";
});

// Cart functionalities

let cartBar = document.querySelector(".cart-sidebar");
let cartOpen = document.querySelector(".cart");
let cartClose = document.querySelector(".cart-close-btn");

cartOpen.addEventListener("click", () => {
  cartBar.style.right = "0%";
});

cartClose.addEventListener("click", () => {
  cartBar.style.right = "-100%";
});

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// Accessing cart icon items counter
let cartItemsCounter = document.querySelector(".cart-items-counter");

cartItemsCounter.innerHTML = localStorage.getItem("cartItemsCounter")
  ? localStorage.getItem("cartItemsCounter")
  : "0";

let cartItemsBox = document.querySelector(".cart-body");

// function to display the cart items
function displayCartItems() {
  let clutter = ``;
  cart.forEach((item, index) => {
    let targetItem = allItems[item.product_Id];
    clutter += `<div class="cart-item flex justify-between align-center">
    <div class="item-content flex align-center">
      <div class="item-img">
        <img src="${targetItem.url}" alt="${targetItem.name}">
      </div>
      <div class="item-title">
        <h3>${targetItem.name}</h3>
        <p>${Math.floor(targetItem.price * item.product_Quantity)}</p>
      </div>
    </div>
    <div class="item-count flex align-center">
      <button class="minus" data-id="${index}">-</button>
      <span class="counter">${item.product_Quantity}</span>
      <button class="plus" data-id="${index}">+</button>
    </div>
    <button class="remove item-del" data-id="${index}">
      <i class="remove fa-solid fa-xmark" data-id="${index}"></i>
    </button>
  </div>`;
  });
  cartItemsBox.innerHTML = clutter;
}

displayCartItems();

// handle the click item add in cart array and open cart
productsBox.addEventListener("click", (e) => {
  let targetElm = e.target;
  if (cart.length == 0) {
    cartBar.style.right = "0%";
  }
  if (targetElm.classList.contains("add")) {
    let itemOccurence = cart.findIndex(
      (item) => item.product_Id == targetElm.dataset.id
    );
    if (itemOccurence == -1) {
      cart.push({ product_Id: targetElm.dataset.id, product_Quantity: 1 });
    } else if (itemOccurence >= 0) {
      let repeatedItemIndex = cart.findIndex(
        (item) => item.product_Id == targetElm.dataset.id
      );
      cart[repeatedItemIndex].product_Quantity =
        cart[repeatedItemIndex].product_Quantity + 1;
    }
    cartItemsCounter.innerText = Number(cartItemsCounter.innerText) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartItemsCounter", cartItemsCounter.innerText);
    displayCartItems();
  }
});

// handle the click event to delete the item from the cart
cartItemsBox.addEventListener("click", (e) => {
  let targetElm = e.target;
  if (targetElm.classList.contains("remove")) {
    cartItemsCounter.innerText =
      Number(cartItemsCounter.innerText) -
      cart[targetElm.dataset.id].product_Quantity;
    localStorage.setItem("cartItemsCounter", cartItemsCounter.innerText);
    cart.splice(targetElm.dataset.id, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  }
});

// handle items plus minus events in cart
cartItemsBox.addEventListener("click", (e) => {
  let targetElm = e.target;
  if (targetElm.classList.contains("minus")) {
    if (cart[targetElm.dataset.id].product_Quantity > 1) {
      cart[targetElm.dataset.id].product_Quantity =
        cart[targetElm.dataset.id].product_Quantity - 1;
      cartItemsCounter.innerText = Number(cartItemsCounter.innerText) - 1;
    }
  } else if (targetElm.classList.contains("plus")) {
    cart[targetElm.dataset.id].product_Quantity =
      cart[targetElm.dataset.id].product_Quantity + 1;
    cartItemsCounter.innerText = Number(cartItemsCounter.innerText) + 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("cartItemsCounter", cartItemsCounter.innerText);
  displayCartItems();
});

let allProductCards = document.querySelectorAll('.product-card')


// function to redirect on product page if someone click on any item
productsBox.addEventListener('click', (e) => {
  let targetElm = e.target;
  if(targetElm.classList.contains('product-card-part')){
    let targetedProductId = targetElm.dataset.id;
    localStorage.setItem('clickedProductId', targetedProductId);
    if(window.location.href.endsWith('index.html')){
      let hrefSplitedArray = window.location.href.split('/');
      hrefSplitedArray.forEach((href, index) => {
        if(href.includes('index.html')){
           hrefSplitedArray.splice(index, 1);
        }
      });
      window.location.href = hrefSplitedArray.join('/');
    }
    window.location.href += `product.html`;
  }
})

