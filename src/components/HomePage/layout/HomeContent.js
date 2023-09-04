import { useState } from "react";
import ContextProvider from "../../../store/contextProvider";
import Cart from "../Cart/Cart";
import Carousel from "./Carousel";
import AddFeedback from "../Meal/addFeedback";
import HamburgerMenu from "./hamburgerMenu";
import Header from "./Header";
import PromotionSection from "./PromotionSection";

function HomeContent () {
  const [cartIsShown,setCartIsShown] = useState(false);
  const [addFeedback,setAddFeedback] = useState(false);
  const [hamburgerMenu,setHamburgerMenu] = useState(true);

  function showCartHandler () {
    setCartIsShown(true)
  };

  function hideCartHandler () {
    setCartIsShown(false)
  };

  return (
    <>
    <ContextProvider>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler}/>}
      {addFeedback && <AddFeedback/>}
      {<HamburgerMenu hamburgerMenu={hamburgerMenu} setHamburgerMenu={setHamburgerMenu}/>}
      <Header showCartHandler={showCartHandler} setHamburgerMenu={setHamburgerMenu}/>
      <Carousel />
      <PromotionSection setAddFeedback={setAddFeedback}/>
    </ContextProvider>
    </>
  )
};

export default HomeContent;