import { useState } from 'react';
import './qaItem.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown,faXmark);

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
      <FontAwesomeIcon className="fas fa-chevron-down" icon="fa-solid fa-chevron-down" />
      <FontAwesomeIcon className="fas fa-times" icon="fa-solid fa-xmark" />
    </button>
  </div>
  )
}

export default QAItem;