import { useState,useEffect } from "react";
import StateContext from "./context";
import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged } from 'firebase/auth'
import { logOut } from "../components/AuthPage/auth";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDGWKpsh_cBRgUgMjF5q5HCI3uJT-rQ4U8",
  authDomain: "food-order-app-266d4.firebaseapp.com",
  databaseURL: "https://food-order-app-266d4-default-rtdb.firebaseio.com",
  projectId: "food-order-app-266d4",
  storageBucket: "food-order-app-266d4.appspot.com",
  messagingSenderId: "869359762545",
  appId: "1:869359762545:web:4f3e081b6c591a54ee6fd0"
});
const auth = getAuth(firebaseConfig);

//

function ContextProvider (props) {
  const [cartItems,setCartItems] = useState([])
  const [totalAmount,setTotalAmount] = useState(0)
  const [amountInCartButton,setAmountInCartButton] = useState(0)
  const [isLogIn,setIsLogIn] = useState(false)
  const [userContent,setUserContent] = useState(null)


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

  useEffect(() => {
    const monitorAuthState = onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user);
        setIsLogIn(true);
        setUserContent(user);
      }
    });
    return () => monitorAuthState();
  }, []);

  function logOutHandler() {
    logOut();
    setIsLogIn(false)
  }
  
  

  const context = {
    //購物車內state
    itemsInCart:cartItems,
    setItemsInCart:setCartItems,
    totalAmount:totalAmount,
    setTotalAmount:setTotalAmount,
    //nav上的state
    amountInCartButton:amountInCartButton,
    setAmountInCartButton:setAmountInCartButton,
    addItem:addItemToCart,
    //以下auth
    user:userContent,
    isLogIn:isLogIn,
    setIsLogIn:setIsLogIn,
    logOut:logOutHandler
  };

  return (
    <StateContext.Provider value={context}>
      {props.children}
    </StateContext.Provider>
  )
};

export default ContextProvider;