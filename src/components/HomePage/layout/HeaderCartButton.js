import './HeaderCartButton.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import StateContext from '../../../store/context';

library.add(faCartShopping);

function HeaderCartButton (props) {
    const Ctx = useContext(StateContext)

    return (
    <button className='button' onClick={props.showCartHandler}>
        <span className='icon'>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </span>
        <span className='text'>我的購物車</span>
        <span className='badge'>
            {Ctx.amountInCartButton}
        </span>
    </button>
    )
};

export default HeaderCartButton;