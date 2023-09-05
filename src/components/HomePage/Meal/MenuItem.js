import { useContext } from "react";
import Button from "../../UI/Button";
import './MenuItem.css'
import StateContext from "../../../store/context";

function MenuItem (props) {
    const Ctx = useContext(StateContext)

    const item = {
        id:props.mealDatas.id,
        price:props.mealDatas.price,
        amount:props.mealDatas.amount
    }

    function addClickHandler () {
        Ctx.addItem(item)
        console.log(item)
        props.setAddFeedback(true);
        setTimeout(() => props.setAddFeedback(false), 600);
    }

    return (
        <>
        <div className='menuContainer'>
            <img className='imgStyle' src={props.imgSrc} alt="套餐"/>
            <label className="labelStyle">Combo Meal {props.mealDatas.id}</label>  
            <p className="descriptionStyle">{props.mealDatas.description}</p>
            <Button className='btnStyle' onClick={addClickHandler}>add</Button>
        </div>

        <div className='mobileMenuContainer'>
            <div className="mobileMenuLeft">
                <img className='mobileImgStyle' src={props.imgSrc} alt="套餐"/>
                <div className='mobileMenuText'>
                    <label className="mobileLabelStyle">Combo Meal {props.mealDatas.id}</label>  
                    <p className="mobileDescriptionStyle">{props.mealDatas.description}</p>
                </div>
            </div>

            <div className="mobileMenuRight">
                <Button className='mobileBtnStyle' onClick={addClickHandler}>add</Button>
            </div>
        </div>
        </>
    )
}

export default MenuItem;