import { useState } from "react";
import StateContext from "./context";

function ContextProvider (props) {
  const [cartItems,setCartItems] = useState([])
  const [totalAmount,setTotalAmount] = useState(0)
  const [amountInCartButton,setAmountInCartButton] = useState(0)

  function addItemToCart (order) {
    const cartItemExisting = cartItems.findIndex(cartItem => cartItem.id === order.id)
    
    if (cartItemExisting >= 0) {
      setCartItems(prevCartState => {
        const updatedCartItems = prevCartState.map(cartItem => {
          if (cartItem.id === order.id) {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          return cartItem;
        });
        console.log(updatedCartItems);
        setAmountInCartButton(updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount, 0));
        return updatedCartItems;
      });
    } else {
      setCartItems(prevCartState => {
        const updatedCartItems = [...prevCartState, { ...order }];
        setAmountInCartButton(updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount, 0));
        return updatedCartItems;
      });      
    };
    
    setTotalAmount(prevTotalAmountState => {
      return (
        prevTotalAmountState + order.price // 添加商品的價格到總金額
      );
    });

    
  };
  

  const context = {
    itemsInCart:cartItems,
    setItemsInCart:setCartItems,
    totalAmount:totalAmount,
    setTotalAmount:setTotalAmount,
    amountInCartButton:amountInCartButton,
    setAmountInCartButton:setAmountInCartButton,
    addItem:addItemToCart,
  };

  return (
    <StateContext.Provider value={context}>
      {props.children}
    </StateContext.Provider>
  )
};

export default ContextProvider;