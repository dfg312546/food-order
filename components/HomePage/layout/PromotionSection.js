import { useQuery } from '@tanstack/react-query';
import ScreenSection from "../../UI/ScreenSection";
import MenuItem from "../Meal/MenuItem";
import './PromotionSection.css';
import mealA from '../../../asset/mealA.jpg';
import mealB from '../../../asset/mealB.jpg';
import mealC from '../../../asset/mealC.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Spinner from 'react-bootstrap/Spinner';

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
                name: responseData[key].name,
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