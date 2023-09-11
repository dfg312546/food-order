import { useForm } from "react-hook-form";
import { createAccount as signUpHandler } from "./auth";
import './signUp.css'
import Button from "../UI/Button";

function SignUp () {
  const { register, handleSubmit, setValue,setError,clearErrors,getValues, formState: {errors} } = useForm({
    defaultValues: {
      userEmail: '',
      userPasswords: '',
      userPasswordsValid:'',
    },
    criteriaMode:"all"
  });

  const submitForm = (data) => {
    console.log(data)
    signUpHandler(data.userEmail,data.userPasswords)
    setValue("userEmail", '');
    setValue("userPasswords", '');
    setValue("userPasswordsValid",'');
  };

  function checkEntered(value) {

    if (getValues(value) === '') {
      setError(value,
      {
        type:{
          required:'此欄位必填！'
        }
      })
    } 
    else if (getValues(value).length < 6) {
      setError(value,
        {
          type:{
            min:'密碼長度至少6位'
          }
        })
    }
    else {
      clearErrors(value)
    }
  }

  function checkPasswords() { 
    if ( getValues("userPasswordsValid") === '' ) {
      setError("userPasswordsValid",
      {
        type:{
          required:'此欄位必填！'
        }
      })
    } 
    else if (getValues("userPasswords") !== getValues("userPasswordsValid")) {
      setError("userPasswordsValid",
      {
        type:{
          unmatched:'不一致'
        }
      })
    } 
    else {
      clearErrors("userPasswordsValid")
    }
  }

  console.log([
    errors.userEmail,errors.userPasswords,errors.userPasswordsValid
  ])

  return (
    <div className="signUpContainer">
      <form className="signUpForm" onSubmit={handleSubmit(submitForm)}>

        <div className="signUpInputSection">
          <label className="signUpLabel">Email<span className="signUpError"> *</span></label>
          <input
           className="signUpInputField"
           {...register("userEmail", {onChange:() => checkEntered("userEmail")})}
           autoComplete="off"
          />
          {errors.userEmail?.type?.required && <p className="signUpError">{errors.userEmail?.type?.required}</p>}
        </div>

        <div className="signUpInputSection">
          <label className="signUpLabel">Passwords<span className="signUpError"> *</span></label>
          <input
           className="signUpInputField"
           {...register("userPasswords", {onChange:(e) => checkEntered("userPasswords")})}
           type='password'
           autoComplete="off"
          />
          {errors.userPasswords?.type?.required && <p className="signUpError">{errors.userPasswords?.type?.required}</p>}
          {errors.userPasswords?.type?.min && <p className="signUpError">{errors.userPasswords?.type?.min}</p>}
        </div>

        <div className="signUpInputSection">
          <label className="signUpLabel">Confirm Passwords<span className="signUpError"> *</span></label>
          <input
           className="signUpInputField"
           {...register("userPasswordsValid",{ onChange:(e) => checkPasswords() })}
            type='password'
            autoComplete="off"
          />
          {errors.userPasswordsValid?.type?.unmatched && <p className="signUpError">{errors.userPasswordsValid?.type?.unmatched}</p>}
          {errors.userPasswordsValid?.type?.required && <p className="signUpError">{errors.userPasswordsValid?.type?.required}</p>}
        </div>

        <div className="signUpBtnContainer">
          <Button className="signUpBtn" type='submit'>Sign Up</Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp