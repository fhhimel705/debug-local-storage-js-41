const addProduct = () => {
  const productName = document.getElementById("product-name");
  const productQuantity = document.getElementById("product-quantity");
  const product = productName.value;
  const quantity = productQuantity.value;
  productName.value = "";
  productQuantity.value = "";
  // console.log(product , quantity);
  displayProduct(product, quantity);
};

const displayProduct = (product, quantity) => {
  const productList = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  productList.appendChild(li);
  setProductToLocal(product , quantity);
};

const getProductToLocal = () =>{
    let cart = {} ;
    const shoppingCart = localStorage.getItem('cart');
    if(shoppingCart){
        cart = JSON.parse(shoppingCart);
    }
    return cart;
}

const setProductToLocal = (product , quantity) =>{
const cart = getProductToLocal();
cart[product] = quantity;
const cartStringified = JSON.stringify(cart);
localStorage.setItem('cart' , cartStringified);

}

const displayProductFromLocal = () =>{
    const cart = getProductToLocal();
    for(const product in cart){
        const quantity = cart[product];
        displayProduct(product , quantity);
    }
}
displayProductFromLocal();
