import { useQuery } from '@tanstack/react-query';
import ScreenSection from "../../UI/ScreenSection";
import MenuItem from "../Meal/MenuItem";
import './PromotionSection.css';
import mealA from '../../../asset/mealA.jpg';
import mealB from '../../../asset/mealB.jpg';
import mealC from '../../../asset/mealC.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Spinner from 'react-bootstrap/Spinner';

// const mealDatas = [
//     {
//         id:'A',
//         price:15,
//         amount:1,
//         imgSrc:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
//         // description:"漢堡加大份薯條"
//     },
//     {
//         id:'B',
//         price:17,
//         amount:1,
//         imgSrc:'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//         // description:"漢堡三重奏"
//     },
//     {
//         id:'C',
//         price:22,
//         amount:1,
//         imgSrc:'https://images.unsplash.com/photo-1528279027-68f0d7fce9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//     },
//     {
//         id:'D',
//         price:30,
//         amount:1,
//         imgSrc:'https://plus.unsplash.com/premium_photo-1683121324230-2702ea6b47be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//     },
//     {
//         id:'E',
//         price:39,
//         amount:1,
//         imgSrc:'https://images.unsplash.com/photo-1610614819513-58e34989848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
//     },
//     {
//         id:'F',
//         price:11.99,
//         amount:1,
//         imgSrc:'https://images.unsplash.com/photo-1615996001375-c7ef13294436?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
//     },
// ]

function PromotionSection (props) {

    const fetchMeals = async () => {
        const response = await fetch('https://food-order-app-266d4-default-rtdb.firebaseio.com/promotionMeals.json');

        const responseData = await response.json();

        const loadedMeals = [];

        for (const key in responseData) {
            loadedMeals.push({
                id: key,
                amount: responseData[key].amount,
                description: responseData[key].description,
                price: responseData[key].price,
            })
        };

        return loadedMeals;
    };

    const { data, isLoading } = useQuery({
        queryKey:['promotionMeals'], 
        queryFn:fetchMeals,
    });
    console.log(data)

    return (
        <ScreenSection id="promotion-section">
            {isLoading ? 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> :

            <div className='wrapper'>
                <MenuItem mealDatas={data[0]} imgSrc={mealA} setAddFeedback={props.setAddFeedback}/>
                <MenuItem mealDatas={data[1]} imgSrc={mealB} setAddFeedback={props.setAddFeedback}/>
                <MenuItem mealDatas={data[2]} imgSrc={mealC} setAddFeedback={props.setAddFeedback}/>
            </div>}
        </ScreenSection>
    )
}

export default PromotionSection;