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
        console.log("remove "+productId);
        let cart = JSON.parse(localStorage.getItem("userCart"));
        const productIndex = cart.findIndex(id => id === productId);
        cart.splice(productIndex, 1);
        console.log(cart);
        localStorage.setItem("userCart", JSON.stringify(cart));
    }
};
