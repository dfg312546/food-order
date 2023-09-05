import { useForm } from "react-hook-form";
// import { useEffect } from "react";
import './contactForm.css'


function ContactForm() {
  const { register, handleSubmit, setValue, formState: {errors} } = useForm({
    defaultValues: {
      userName: '',
      userEmail: '',
      userPhone: '',
    }
  });


  const submitForm = (data) => {
    console.log(data)
    setValue("userName", '');
    setValue("userEmail", '');
    setValue("userPhone", '');
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
          autocomplete="off"
        />
        <p className="inputErrot">{errors.userName?.message}</p>
      </div>
      

      <div className="inputContainer">
        <label className="inputLabel">User email <span className="inputErrot">*</span></label>
        <input 
        className="inputField"
        {...register("userEmail", {required: '此欄位必填！'})}
        placeholder='電子郵件'
        autocomplete="off"
        />
        <p className="inputErrot">{errors.userEmail?.message}</p>
      </div>
      

      <div className="inputContainer">
        <label className="inputLabel">Phone number</label>
        <input 
        className="inputField"
        {...register("userPhone",)}
        placeholder='聯絡電話'
        autocomplete="off"
        />
      </div>


      <button type="submit" className="contactFormBtn">送出</button>
    </form>
    </div>
  )
}

export default ContactForm;