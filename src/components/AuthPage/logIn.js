import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { loginEmailPassword as logInHandler } from "./auth";
import './logIn.css'
import StateContext from "../../store/context";
import { useContext } from 'react';
import Button from "../UI/Button";

function LogIn () {
  const Ctx = useContext(StateContext);

  const { register, handleSubmit, setValue, formState: {errors} } = useForm({
    defaultValues: {
      userEmail: '',
      userPasswords: '',
    }
  });

  const submitForm = (data) => {
    console.log(data)
    logInHandler(data.userEmail,data.userPasswords)
    setValue("userEmail", '');
    setValue("userPasswords", '');
    Ctx.setIsLogIn(true)
  };

  

  return (
    <div className="logInFormContainer">
      <form className="logInForm" onSubmit={handleSubmit(submitForm)}>

        <div className="logInContainer">
          <label className="logInLabel">Email<span className="inputErrot"> *</span></label>
          <input 
            className="logInInput"
            {...register("userEmail", {required: '此欄位必填！'})}
            autoComplete="off"
          />
          <p className="inputErrot">{errors.userEmail?.message}</p>
        </div>

        <div className="logInContainer">
          <label className="logInLabel">Passwords<span className="inputErrot"> *</span></label>
          <input 
            className="logInInput"
            {...register("userPasswords", {required: '此欄位必填！'})}
            type='password'
            autoComplete="off"
          />
          <p className="inputErrot">{errors.userPasswords?.message}</p>
        </div>

        <div className="logInBtnContainer">
          <Button className="logInBtn" type='submit'>
            Log In
          </Button>

          <p>Don't have an account ?</p>

          <Button className="signUpBtn">
            <Link to='/signUp'>Sign Up</Link>
          </Button>
        </div>

      </form>
    </div>
  )
}

export default LogIn