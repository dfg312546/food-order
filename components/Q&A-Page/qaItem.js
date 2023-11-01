import { useState } from 'react';
import './qaItem.css'
import { FaXmark,FaChevronDown } from "react-icons/fa6";

function QAItem (props) {
  const [isActive,setIsActive] = useState(false);

  function toggleHandler() {
    setIsActive(!isActive)
  }
  
  const activeClass = `${isActive ? 'active' : ''}`

  return (
  <div className={`faq ${activeClass}`}>
    <h3 className="faq-title">
      {props.title}
    </h3>

    <p className="faq-text">
      {props.text}
    </p>

    <button className="faq-toggle" onClick={toggleHandler}>
      <FaChevronDown className="fas fa-chevron-down" />
      <FaXmark className="fas fa-times" />
    </button>
  </div>
  )
}

export default QAItem;