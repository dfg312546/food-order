import { useRef,useState,useContext } from 'react'
import StateContext from '../../../store/context';
import Button from '../../UI/Button'
import './OrderInfoForm.css'

function isEmpty (value) {
  return value.trim() === '';
};

function OrderInfoForm (props) {
  const Ctx = useContext(StateContext);
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    email:true
  });
  const [checkoutDone,setCheckoutDone] = useState(false);
  const [isSubmitting,setIsSubmitting] = useState(false);

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const emailInputRef = useRef();

  const submitOrder = async (userData) => {
    await fetch('https://food-order-app-266d4-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({//轉換成JSON格式
        user: userData,
        orderedItems: Ctx.itemsInCart
      })
    });
  };

  async function confirmHandler (event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredEmailIsValid = !isEmpty(enteredEmail);

    setFormInputsValidity({
      name:enteredNameIsValid,
      street:enteredStreetIsValid,
      email:enteredEmailIsValid
    });

    const formIsValid = 
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredEmailIsValid;

    if (!formIsValid) {
      return;
    }

    setIsSubmitting(!isSubmitting);

   await submitOrder({
      name:enteredName,
      street:enteredStreet,
      email:enteredEmail,
    });

    Ctx.setItemsInCart([]);
    Ctx.setTotalAmount(0);
    Ctx.setAmountInCartButton(0);

    setCheckoutDone(!checkoutDone)
  };

  const nameControlClasses = `control ${
    formInputsValidity.name ? '' : "invalid"
  }`;
  const streetControlClasses = `control ${
    formInputsValidity.street ? '' : "invalid"
  }`;
  const emailControlClasses = `control ${
    formInputsValidity.email ? '' : "invalid"
  }`;


  return (
    <>
    {!checkoutDone && !isSubmitting &&
    <form className='form' onSubmit={confirmHandler}>
      <div className='checkoutInputContainer'>
        <div className={nameControlClasses}>
          <label htmlFor='name'>您的姓名 *</label>
          <input type='text' id='name' ref={nameInputRef}/>
          {!formInputsValidity.name && <p>請輸入姓名！</p>}
        </div>

        <div className={streetControlClasses}>
          <label htmlFor='street'>寄送地址 *</label>
          <input type='text' id='street' ref={streetInputRef}/>
          {!formInputsValidity.street && <p>請輸入寄送地址！</p>}
        </div>

        <div className={emailControlClasses}>
          <label htmlFor="email">電子郵件 *</label>
          <input type='text' id='email' ref={emailInputRef}/>
          {!formInputsValidity.email && <p>請輸入電子郵件！</p>}
        </div>
      </div>
      
      <div className='checkoutButtonStyle'>
        <Button className='cancelCheckoutButton' onClick={props.checkHandler}>上一步</Button>
        <Button className='confirmCheckoutButton'>結帳</Button>
      </div>
    </form>}

    {!checkoutDone && isSubmitting && 
    <div>訂單發送中</div>}

    {checkoutDone && isSubmitting &&
    <div>
      結帳成功！
      <div className='checkoutButtonStyle'>
        <Button className='cancelCheckoutButton' onClick={props.hideCartHandler}>關閉</Button>
      </div>
    </div>}
    </>
  )
};

export default OrderInfoForm