import { useForm } from "react-hook-form";
// import { useEffect } from "react";
import './contactForm.css'


function ContactForm() {
  const { register, handleSubmit, setValue, formState: {errors} } = useForm({
    defaultValues: {
      userName: '',
      userEmail: '',
      userPhone: '',
      userFeedback:'',
    }
  });


  const submitForm = (data,e) => {
    e.preventDefault();
    console.log(data)
    setValue("userName", '');
    setValue("userEmail", '');
    setValue("userPhone", '');
    setValue("userFeedback", '');
  };

  // console.log(watch());
  // const userName = watch("userName")


  return (
    <div className="contactPageContainer">
    <form className="contactForm" onSubmit={handleSubmit(submitForm)}>
      <h1 className="contactPageTitle">
        聯絡我們
      </h1>
      <p className="contactPageDescription">將您的問題及意見反應給我們，客服將會儘速與您取得聯繫！</p>

      <div className="inputContainer">
        <label className="inputLabel">User name <span className="inputErrot">*</span></label>
        <input 
          className="inputField"
          {...register("userName", {required: '此欄位必填！'})} 
          placeholder='姓名'
          autoComplete="off"
        />
        <p className="inputErrot">{errors.userName?.message}</p>
      </div>
      

      <div className="inputContainer">
        <label className="inputLabel">User email <span className="inputErrot">*</span></label>
        <input 
        className="inputField"
        {...register("userEmail", {required: '此欄位必填！'})}
        placeholder='電子郵件'
        autoComplete="off"
        />
        <p className="inputErrot">{errors.userEmail?.message}</p>
      </div>
      

      <div className="inputContainer">
        <label className="inputLabel">Phone number</label>
        <input 
        className="inputField"
        {...register("userPhone",)}
        placeholder='聯絡電話'
        autoComplete="off"
        />
      </div>

      <div className="inputContainer">
        <label className="inputLabel">Problems & Suggestion <span className="inputErrot">*</span></label>
        <textarea 
        className="inputField-feedback"
        {...register("userFeedback",{required: '此欄位必填！'})}
        placeholder='問題與建議'
        autoComplete="off"
        />
        <p className="inputErrot">{errors.userFeedback?.message}</p>
      </div>


      <button type="submit" className="contactFormBtn">Send</button>
    </form>
    </div>
  )
}

export default ContactForm;