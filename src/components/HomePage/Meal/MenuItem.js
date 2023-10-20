import { useContext } from "react";
import Button from "../../UI/Button";
import './MenuItem.css'
import StateContext from "../../../store/context";
import AddIcon from '@mui/icons-material/Add';

function MenuItem (props) {
    const Ctx = useContext(StateContext)

    const item = {
        id:props.mealDatas.id,
        price:props.mealDatas.price,
        amount:props.mealDatas.amount,
        name:props.mealDatas.name,
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
            <section>
                <img className='imgStyle' src={props.imgSrc} alt="套餐"/>
                <label className="labelStyle">{props.mealDatas.name}</label>  
                <p className="descriptionStyle">{props.mealDatas.description}</p>
            </section>

            <section className="menuFooterStyle">
                <span className="priceStyle">$ {props.mealDatas.price}</span>
                <Button className='btnStyle' onClick={addClickHandler}><span className='btnTextStyle'>Add </span><AddIcon /></Button>
            </section>

        </div>

        <div className='mobileMenuContainer'>
            <div className="mobileMenuLeft">
                <img className='mobileImgStyle' src={props.imgSrc} alt="套餐"/>
                <div className='mobileMenuText'>
                    <label className="mobileLabelStyle">{props.mealDatas.name}</label>  
                    <p className="mobileDescriptionStyle">{props.mealDatas.description}</p>
                </div>
            </div>

            <div className="mobileMenuRight">
                <Button className='mobileBtnStyle' onClick={addClickHandler}>Add</Button>
            </div>
        </div>
        </>
    )
}

export default MenuItem;