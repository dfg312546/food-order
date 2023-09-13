import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { loginEmailPassword as logInHandler } from "./auth";
import './logIn.css'
import StateContext from "../../store/context";
import { useContext,useState } from 'react';
import Button from "../UI/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';


function LogIn () {
  const Ctx = useContext(StateContext);
  const [isError, setIsError] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorMessage,setErrorMessage] = useState('')

  const { register, handleSubmit, setValue, formState: {errors} } = useForm({
    defaultValues: {
      userEmail: '',
      userPasswords: '',
    }
  });

  const submitForm = async (data) => {
      try {
        console.log(data);
        setIsLoggingIn(true);
        await logInHandler(data.userEmail,data.userPasswords);
        Ctx.setIsLogIn(true);
    } catch (error) {
        setIsError(true);
        if (error.code === 'auth/user-not-found') {
          setErrorMessage('User not found. Please check your email.');
        } else if (error.code === 'auth/wrong-password') {
          setErrorMessage('Wrong password. Please check your password.');
        } else {
          setErrorMessage('Invalid account or passwords. Please try again later.');
        }
        console.log(error);
    } finally {
        setIsLoggingIn(false);
        setValue("userEmail", '');
        setValue("userPasswords", '');
    }
  };

  return (
    <div className="logInFormContainer">
      {isLoggingIn ? 

      (<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>) :

      (<form className="logInForm" onSubmit={handleSubmit(submitForm)}>

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

      </form>)};

      {isError &&         
        <Alert key='danger' variant='danger'>
          ERROR : {errorMessage}
        </Alert>};
    </div>
  )
}

export default LogIn