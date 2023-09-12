import './CartItem.css'
import Button from '../../UI/Button'
import { useContext } from 'react';
import StateContext from '../../../store/context';
import { FaPlus,FaMinus } from "react-icons/fa6";

function CartItem (props) {
  const Ctx = useContext(StateContext);

  function addCartItem () {

    Ctx.setItemsInCart((prevCartState) => {
      const updatedCartItems = prevCartState.map((item) => {
        if (item.id === props.id) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item; // 不是目標物件，保持不變
      });
      const newTotalAmount = updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount * item.price, 0);
      Ctx.setTotalAmount(newTotalAmount);
      const newAmountInCartButton = updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount, 0);
      Ctx.setAmountInCartButton(newAmountInCartButton);
      //儲存到localstorage
      Ctx.isLogIn && localStorage.setItem("cartItems",JSON.stringify(updatedCartItems));
      Ctx.isLogIn && localStorage.setItem("amountInCartButton",JSON.stringify(newAmountInCartButton));
      Ctx.isLogIn && localStorage.setItem("totalAmount",JSON.stringify(newTotalAmount));

      return updatedCartItems;
    });
  };

  function calcelCartItem () {

    Ctx.setItemsInCart((prevCartState) => {
      const updatedCartItems = prevCartState.map((item) => {
        if (item.id === props.id) {
          return {
            ...item,
            amount: item.amount > 1 ? item.amount - 1 : 1
          };
        }
        return item; // 不是目標物件，保持不變
      });
      const newTotalAmount = updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount * item.price, 0)
      Ctx.setTotalAmount(newTotalAmount);
      const newAmountInCartButton = updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount, 0)
      Ctx.setAmountInCartButton(newAmountInCartButton);
      //儲存到localstorage
      Ctx.isLogIn && localStorage.setItem("cartItems",JSON.stringify(updatedCartItems));
      Ctx.isLogIn && localStorage.setItem("amountInCartButton",JSON.stringify(newAmountInCartButton));
      Ctx.isLogIn && localStorage.setItem("totalAmount",JSON.stringify(newTotalAmount));

      return updatedCartItems;
    });
  };

  function removeCartItem() {
    const updatedCartItems = Ctx.itemsInCart.filter(item => item.id !== props.id);

    Ctx.setItemsInCart(updatedCartItems);
    Ctx.isLogIn && localStorage.setItem("cartItems",JSON.stringify(updatedCartItems));

    const newAmountInCartButton = updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount, 0)
    Ctx.setAmountInCartButton(newAmountInCartButton);
    Ctx.isLogIn && localStorage.setItem("amountInCartButton",JSON.stringify(newAmountInCartButton));

    Ctx.setTotalAmount(prevTotalAmountState => {
      Ctx.isLogIn && localStorage.setItem("totalAmount",JSON.stringify(prevTotalAmountState - props.price * props.amount));
      return prevTotalAmountState - props.price * props.amount;
    });
  };
  

  return (
    <>
      <li className='cartItemStyle'>
        <div className='cartItemTextStyle'>
          商品名稱：{'套餐' + props.id}

          
          <div className='cartItemNumberStyle'>
          數量：
          <Button className='cartButtonStyle' onClick={calcelCartItem}>
            <FaMinus />
          </Button>
          <span className='propsAmount'>{props.amount}</span>
          <Button className='cartButtonStyle' onClick={addCartItem}>
            <FaPlus/>
          </Button>
          </div>
        </div>
        <div className='cartItemPriceStyle'>
          <div>金額：${
                      props.amount * props.price % 1 === 0
                      ? props.amount * props.price
                      : (props.amount * props.price).toFixed(2)
                      }
          </div>
          <Button className='removeCartItemButtonStyle' onClick={removeCartItem}>移除商品</Button>
        </div>
      </li>
    </>
  )
};

export default CartItem;