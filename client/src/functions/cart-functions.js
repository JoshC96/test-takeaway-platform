export default {
    initCart: function () {
        if(localStorage.getItem("userCart") === null){
            localStorage.setItem("userCart", "[]");
        }
    },
    getCart: function () {
        return localStorage.getItem("userCart");
    },
    saveCart: function(cartObject){
        let cartString = JSON.stringify(cartObject)
        localStorage.setItem("userCart", cartString);
    }
};
