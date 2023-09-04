import './Cart.css'
import Modal from '../../UI/Modal';
import { useContext,useState } from 'react';
import StateContext from '../../../store/context';
import CartItem from './CartItem'
import Button from '../../UI/Button';
import OrderInfoForm from './OrderInfoForm';

function Cart (props) {
    const Ctx = useContext(StateContext);
    const [goCheckout,setGocheckout] = useState(false)

    function checkHandler () {
        setGocheckout(!goCheckout)
    };

    const cartItems = Ctx.itemsInCart.map(item =>
        <CartItem
            key={item.id} 
            id={item.id} 
            amount={item.amount} 
            price={item.price} 
        />
        )

    return (
        <Modal hideCartHandler={props.hideCartHandler}>
            {
            (cartItems.length > 0 && goCheckout === false )  &&
            (<>
                <ul className='cartItemsStyle'>{cartItems}</ul>
                <div className='totalAmountStyle'>
                    總金額：${Ctx.totalAmount % 1 === 0 ? Ctx.totalAmount : Ctx.totalAmount.toFixed(2)}
                </div>
            </>)
            }

            {cartItems.length === 0 && !goCheckout && (<div className='totalAmountStyle'>購物車是空的</div>)}
            
            {goCheckout && <OrderInfoForm hideCartHandler={props.hideCartHandler} checkHandler={checkHandler}/>}

            {!goCheckout && <div className='cartButtonsStyle'>
                <Button className='cartCloseButton' onClick={props.hideCartHandler}>關閉</Button>
                {cartItems.length > 0 && <Button className='cartOrderButton' onClick={checkHandler}>新增訂單</Button>}
            </div>}
        </Modal>
    )
};

export default Cart;