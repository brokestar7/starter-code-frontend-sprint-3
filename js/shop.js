// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  addToCart(id);
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
//   for(let i=0;i<products.length;i++){
//     if(i==id){
//       cartList.push(products[id-1]);
//     }
//   }
}

// Exercise 2
function cleanCart() {
  cartList = [];
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  for(let i=0;i<cartList.length;i++){
    total += cartList[i].price;
  }
}

// Exercise 4
// function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
//   cart = [];
//   for(let i=0;i<cartList.length;i++){
//     if(cart.length == 0){
//       cart.push(cartList[i])
//       cart[cart.length-1].quantity = 1;
//       cart[cart.length-1].subtotal = cart[cart.length-1].quantity * cart[cart.length-1].price;
//       cart[cart.length-1].subtotalWithDiscount = 0;
//     }
//     else if(cart.includes(cartList[i])){
//       cart[cart.indexOf(cartList[i])].quantity +=1;
//       cart[cart.length-1].subtotal = cart[cart.length-1].quantity * cart[cart.length-1].price;
//     }
//     else{
//       cart.push(cartList[i])
//       cart[cart.length-1].quantity = 1;
//       cart[cart.length-1].subtotal = cart[cart.length-1].quantity * cart[cart.length-1].price;
//       cart[cart.length-1].subtotalWithDiscount = 0;
//     }
//   }
//   applyPromotionsCart();
// }

// Exercise 5
function applyPromotionsCart() {
  for(let i=0;i<cart.length;i++){
    if(cart[i].id == 1 && cart[i].quantity >=3){
      cart[i].subtotalWithDiscount = cart[i].subtotal - cart[i].subtotal * 0.2;
    }
    else if(cart[i].id == 3 && cart[i].quantity >=10){
      cart[i].subtotalWithDiscount = cart[i].subtotal - cart[i].subtotal * 0.3;
    }
  }
  // Apply promotions to each item in the array "cart"
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  for(let i=0;i<products.length;i++){
    if(i==id-1){  // Este if se encarga de encontrar el objeto en la array sumando en la i hasta que coincida con la id.
      if(cart.length == 0){
        cart.push(products[id-1])
        cart[cart.length-1].quantity = 1;
        cart[cart.length-1].subtotal = cart[cart.length-1].quantity * cart[cart.length-1].price;
        cart[cart.length-1].subtotalWithDiscount = 0;
      }
      else if(cart.includes(products[id-1])){
        cart[cart.indexOf(products[id-1])].quantity +=1;
        cart[cart.length-1].subtotal = cart[cart.length-1].quantity * cart[cart.length-1].price;
      }
      else{
        cart.push(products[id-1])
        cart[cart.length-1].quantity = 1;
        cart[cart.length-1].subtotal = cart[cart.length-1].quantity * cart[cart.length-1].price;
        cart[cart.length-1].subtotalWithDiscount = 0;
      }
    }
  }
  applyPromotionsCart();
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  for(let i=0;i<cart.length;i++){
    if(cart[i].id==id){ 
      if(cart[i].quantity<=1){
        cart.splice(i,1);
      }
      else{
        cart[i].quantity -= 1;
      }
    }
  }
  applyPromotionsCart();
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

function open_modal() {
  console.log("Open Modal");
}
