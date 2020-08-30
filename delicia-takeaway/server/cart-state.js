import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext({
  id: "",
  name: "",
  priority: false
});
const { Provider } = CartContext;

function reducer(state, action) {
  switch (action.type) {
  case "add":
    return [
      ...state,
      {
        id: state.length * Math.random(),
        name: action.name
      }
    ];
  case "remove":
    return state.filter((_, index) => {
      return index !== action.index;
    });
  default:
    return state;
  }
}

function CartItemProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, []);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useCartContext() {
  return useContext(CartContext);
}

export { CartItemProvider, useCartContext };
