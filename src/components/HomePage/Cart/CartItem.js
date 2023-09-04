import './CartItem.css'
import Button from '../../UI/Button'
import { library } from '@fortawesome/fontawesome-svg-core';
import { useContext } from 'react';
import StateContext from '../../../store/context';
import {faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus,faMinus)

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

      Ctx.setTotalAmount(updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount * item.price, 0));

      Ctx.setAmountInCartButton(updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount, 0));

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

      Ctx.setTotalAmount(updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount * item.price, 0));

      Ctx.setAmountInCartButton(updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount, 0));

      return updatedCartItems;
    });
  };

  function removeCartItem() {
    const updatedCartItems = Ctx.itemsInCart.filter(item => item.id !== props.id);

    Ctx.setItemsInCart(updatedCartItems);

    Ctx.setAmountInCartButton(updatedCartItems.reduce((totalAmount, item) => totalAmount + item.amount, 0));

    Ctx.setTotalAmount(prevTotalAmountState => {
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
            <FontAwesomeIcon icon="fa-solid fa-minus" />
          </Button>
          <span className='propsAmount'>{props.amount}</span>
          <Button className='cartButtonStyle' onClick={addCartItem}>
            <FontAwesomeIcon icon="fa-solid fa-plus"/>
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