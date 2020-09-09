import Storage from '../functions/cart-functions'


export default {
    loadCartFromStorage: function(){
        if(Storage.getCart() === null || Storage.getCart() === "[]"){
            Storage.initCart();
            // DEFAULT VALUES
            return {
                priceTotal: 0.0,
                location: "",
                stateLocation: "",
                pickUpTime: "",
                itemsInCart: [],
                customer: {}
            }
        }
        else{
            let savedCart = JSON.parse(Storage.getCart())
            return {
                priceTotal: savedCart.priceTotal,
                location: savedCart.location,
                stateLocation: savedCart.stateLocation,
                pickUpTime: savedCart.pickUpTime,
                itemsInCart: savedCart.itemsInCart,
                customer: savedCart.customer,
            }
        }
    },
    saveCartToStorage: function(property, itemToSave){
        let currentCart = JSON.parse(Storage.getCart())
        console.log(currentCart)

        switch (property) {

            case "priceTotal":
                currentCart.priceTotal = itemToSave

            case "location":
                currentCart.location = itemToSave

            case "stateLocation":
                currentCart.stateLocation = itemToSave

            case "pickUpTime":
                currentCart.pickUpTime = itemToSave

            case "itemsInCart":
                currentCart.itemsInCart = itemToSave

            case "customer":
                currentCart.customer = itemToSave
        }
        Storage.saveCart(currentCart)
    }
}