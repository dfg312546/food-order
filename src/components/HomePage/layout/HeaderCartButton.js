import './HeaderCartButton.css'
import { useContext } from 'react';
import StateContext from '../../../store/context';
import { FaCartShopping } from "react-icons/fa6";

function HeaderCartButton (props) {
    const Ctx = useContext(StateContext)

    return (
    <button className='button' onClick={props.showCartHandler}>
        <span className='icon'>
            <FaCartShopping />
        </span>
        <span className='text'>我的購物車</span>
        <span className='badge'>
            {Ctx.amountInCartButton}
        </span>
    </button>
    )
};

export default HeaderCartButton;