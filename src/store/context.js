import React from "react";

const StateContext = React.createContext({
    itemsInCart:[],
    setItemsInCart:(item) => {},
    totalAmount:0,
    setTotalAmount:(item) => {},
    amountInCartButton:0,
    setAmountInCartButton:(item) => {},
    addItem:(item) => {},
    // clearCart: () => {}
});

export default StateContext;