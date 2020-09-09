import React, { createContext, useReducer, useContext } from "react";


const CartContext = createContext();
const initialState = Helper.loadCartFromStorage()

const { Provider } = CartContext;

function reducer(state, action) {

    switch (action.type) {

        case "updateLocation":
            state.location = action.location;

        case "updateStateLocation":
            state.stateLocation = action.stateLocation;

        case "updatePickUpTime":
            state.pickUpTime = action.pickUpTime;

        case "updateCustomer":
            state.customer = {
                name: action.customerName,
                phone: action.customerPhone,
                email: action.customerEmail
            };
            
        default:
            return state;
    }
}

function CartProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={[state, dispatch]} {...props} />;
}

function useCartContext() {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };
