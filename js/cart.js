/* global Cart */
'use strict';

// try playing with document.querySelector


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  //represents contents of tbody in cart.html
  let cartTableRows = document.getElementById('cart').getElementsByTagName('tbody');
  //for each body element in all of the rows
  for (let tBodyElem of cartTableRows){
    //while the first child of the body element exists
    while (tBodyElem.firstChild) {
      //remove that child from the body
      tBodyElem.removeChild(tBodyElem.firstChild);
    }
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let cartTableRows = document.getElementsById('cart').getElementsByTagName('tbody');

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++ ){
    // TODO: Create a TR
    let newRowElem = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    let deleteDataElem = doc.createElement('td');
  }
  
  
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  cartTableRows.appendChild(newRowElem);

}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let itemBeingRemoved = event.target.id;
  for (let i = 0; i < cart.items.length; i++) {
    if (cart.items[i].product === itemBeingRemoved){
      //itemBeingRemoved removes the item in position i of items
      cart.itemBeingRemoved(cart.items[i]);
    }
  }
  // TODO: Save the cart back to local storage
  localStorage.setItem('tbody', cart);
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
