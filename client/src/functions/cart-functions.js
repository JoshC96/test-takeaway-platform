import API from "../routes/api"

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
    getCartTotal: function(){
        let currentCart = localStorage.getItem("userCart");
        let cartTotal = parseFloat('0.00');

        API.productsInCart(currentCart)
            .then(function(res){
                JSON.parse(currentCart).forEach(element => {
                    res.data.forEach(product => {
                        if(element === product.id){
                            cartTotal = cartTotal+parseFloat(product.price)
                        }
                    });
                });

                return cartTotal.toFixed(2);

            }).catch(function(err){
                console.log("Error getting total")
                console.log(err)
            });
    }
};
