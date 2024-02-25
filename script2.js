// Product Page Javascript

let allItems = productsData.map((sec) => sec.items).flat(1);

let productBox = document.querySelector(".product-box");

// function to display the targeted product
function displayProduct() {
  let clutter = ``;
  let targetedProduct =
    allItems[Number(JSON.parse(localStorage.getItem("clickedProductId")))];
  clutter = `<div class="product container flex">
    <div class="product-images">
        <div class="main-image">
            <img src="${targetedProduct.url}" alt="${targetedProduct.name}">
        </div>
        <div class="related-images flex">
            ${targetedProduct.relatedImages
              .map((img) => {
                return `<div class="img-box related-images-part">
                <img src="${img}" alt="${targetedProduct.name}" class="related-images-part image">
            </div>`;
              })
              .join("")}
        </div>
    </div>
    <div class="product-content flex flex-direction">
        <div class="product-headings flex justify-between">
            <div class="product-title">
                <h1>${targetedProduct.name}</h1>
                <p>${targetedProduct.description}</p>
            </div>
            <ul class="product-rating flex">
                <li>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                </li>
            </ul>
        </div>
        <div class="product-price">
            <i class="fa fa-inr" aria-hidden="true"></i>
            <span>${targetedProduct.price}</span>
        </div>
        <div class="product-buttons">
            <button class="buy-now">Buy Now</button>
            <button class="add-to-cart"> Add to Cart</button>
        </div>
        <div class="product-description flex flex-direction">
            ${targetedProduct.qualityPoints
              .map((point) => {
                return `<div class="description-point flex">
                <span></span>
                <p>${point}</p>
            </div>`;
              })
              .join("")}
        </div>
    </div>
</div>`;
  productBox.innerHTML = clutter;
}

displayProduct();

let suggestedProductsBox = document.querySelector(".suggested-products");

let similarProducts;

// function to display the suggested products that similar as targeted product
function displaySuggestedProducts() {
  let targetedProduct =
    allItems[Number(localStorage.getItem("clickedProductId"))];
  similarProducts = allItems.filter(
    (item) => item.clothCategory == targetedProduct.clothCategory
  );
  let indexTargetedItem = similarProducts.findIndex(
    (item) => item.name == targetedProduct.name
  );
  similarProducts.splice(indexTargetedItem, 1);

  let clutter = ``;
  similarProducts.forEach((item, index) => {
    clutter += `<div class="product-card product-card-part flex flex-direction align-center" data-id="${index}">
    <div class="product-img product-card-part" data-id="${index}">
        <img src="${item.url}" alt="${item.name}" class="product-card-part" data-id="${index}">
    </div>
    <div class="product-content flex justify-between product-card-part" data-id="${index}">
        <div class="product-title product-card-part" data-id="${index}">
            <h3 class="product-card-part" data-id="${index}">${item.name}</h3>
            <p class="product-card-part" data-id="${index}">${item.description}</p>
        </div>
        <div class="product-price text-center flex align-center product-card-part" data-id="${index}">
            <i class="fa fa-inr product-card-part" aria-hidden="true" data-id="${index}"></i>
            <h4 class="product-card-part" data-id="${index}">${item.price}</h4>
        </div>
    </div>
</div>`;
  });
  suggestedProductsBox.innerHTML = clutter;
}

displaySuggestedProducts();

// Cart functionalities in product page

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

let productButtonsBox = document.querySelector(".product-buttons");

// Handling click event on add to cart button

productButtonsBox.addEventListener("click", (e) => {
  let targetElm = e.target;
  if (targetElm.classList.contains("add-to-cart")) {
    let itemOccurence = cart.findIndex(
      (item) => item.product_Id == localStorage.getItem("clickedProductId")
    );
    if (itemOccurence == -1) {
      cart.push({
        product_Id: localStorage.getItem("clickedProductId"),
        product_Quantity: 1,
      });
    } else if (itemOccurence >= 0) {
      let repeatedItemIndex = cart.findIndex(
        (item) => item.product_Id == localStorage.getItem("clickedProductId")
      );
      cart[repeatedItemIndex].product_Quantity =
        cart[repeatedItemIndex].product_Quantity + 1;
    }
    cartItemsCounter.innerText = Number(cartItemsCounter.innerText) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartItemsCounter", cartItemsCounter.innerText);
    cartBar.style.right = "0%";
    displayCartItems();
  }
});

// Add click event listener on similar product cards
suggestedProductsBox.addEventListener("click", (e) => {
  let targetElm = e.target;
  if (targetElm.classList.contains("product-card-part")) {
    let targetProductId = allItems.findIndex(
      (item) => item.name == similarProducts[targetElm.dataset.id].name
    );
    localStorage.setItem("clickedProductId", JSON.stringify(targetProductId));
    displayProduct();
    displaySuggestedProducts();
    window.location.reload();
  }
});

// Add image changing functionalities in product images

let relatedImageBox = document.querySelector(".related-images");

let mainImageBox = document.querySelector(".main-image");

relatedImageBox.addEventListener("click", (e) => {
  let targetElm = e.target;
  if (targetElm.classList.contains("related-images-part")) {
    let mainImgSource = mainImageBox.firstElementChild.src;
    if (targetElm.classList.contains("img-box")) {
      let imgSource = targetElm.firstElementChild.src;
      mainImageBox.firstElementChild.src = imgSource;
      targetElm.firstElementChild.src = mainImgSource;
    } 
    else if (targetElm.classList.contains("image")) {
      let imgSource = targetElm.src;
      mainImageBox.firstElementChild.src = imgSource;
      targetElm.src = mainImgSource;
    }
  }
});
