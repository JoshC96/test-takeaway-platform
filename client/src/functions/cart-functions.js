import Cart from "./cart"

// REFACTOR TO USE CART OBJECT
export default {
    initCart: function () {
        if(localStorage.getItem("userCart") === null){
            localStorage.setItem("userCart", "[]");
        }
    },
    getCart: function () {
        return localStorage.getItem("userCart");
    },
    addToCart: function (productId) {
        let cart = JSON.parse(localStorage.getItem("userCart"));
        cart.push(productId);
        localStorage.setItem("userCart", JSON.stringify(cart));
    },
    removeFromCart: function (productId) {
        let cart = JSON.parse(localStorage.getItem("userCart"));
        const productIndex = cart.findIndex(id => id === productId);
        if(productIndex >= 0){
            cart.splice(productIndex, 1);
        }
        localStorage.setItem("userCart", JSON.stringify(cart));
    },
    getCartTotal: function(products){
        let total = parseFloat('0.00');
        products.forEach(element=>total+=parseFloat(element.price));
        return total.toFixed(2);
    }
};
