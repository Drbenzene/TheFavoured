if(document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
}else {
  ready()
}

const {log} = console

function ready() {

  //Getting the click buttons on the Page & Adding Event Listeners 
const removedCartItemButtons = document.getElementsByClassName("remove-item-button")

log(removedCartItemButtons)
for (let i = 0; i < removedCartItemButtons.length; i++) {
  const removedCartItemButton = removedCartItemButtons[i];
  removedCartItemButton.addEventListener("click",removedCartItemFunction)
}

const cartQuantity = document.getElementsByClassName("tdQuantity")
log(cartQuantity)

for (let i = 0; i < cartQuantity.length; i++) {
  const cartQty = cartQuantity[i];
  cartQty.addEventListener('change', cartIncreasedFunc)
}

}


  //Writing Functions for the click handlers

  function removedCartItemFunction (e) {
    const onButtonClicked = e.target;
    onButtonClicked.parentElement.parentElement.remove()
    updateCartTotalPrice()
  }

  function cartIncreasedFunc (e) {
    let onCartValueChanged = e.target

    if (onCartValueChanged.value <= 0) {
      onCartValueChanged.value = 1;
    }
    updateCartTotalPrice()
  }


  function updateCartTotalPrice() {
    let cart = document.getElementsByClassName("addedCart-con")[0];
    let cartItems = document.getElementsByClassName("addedCart-row")
    // log(cart)
    // log(cartItems)
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];
      let itemPrice = cartItem.getElementsByClassName("cart-Item-Price")[0];
      log(itemPrice)
      const quantity = cartItem.getElementsByClassName("tdQuantity")[0]
      log(quantity)
    //   let price = parseFloat(itemPrice.innerText.replace('₦', ''))
    //   const qtyElement = quantity.value

    //   total = qtyElement * price
    }

    // total = Math.round(total * 100)/100
    // document.getElementsByClassName("cart-items-total")[0].innerText = `Total: ₦${total}`
  }