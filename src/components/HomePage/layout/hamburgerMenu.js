import HamburgerMenuModal from "../../UI/hamburgerMenuModal";
import './hamburgerMenu.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck,faFire,faThumbsUp,faGifts,faBars,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faUserCheck,faFire,faThumbsUp,faGifts,faBars,faCircleXmark);

function HamburgerMenu(props) {

  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }

    props.setHamburgerMenu(true)
  };

  const closeHamburgerMenu = () => {
    props.setHamburgerMenu(true);
  }

  return (
  <HamburgerMenuModal hamburgerMenu={props.hamburgerMenu} setHamburgerMenu={props.setHamburgerMenu}>
    <header className="hamburgerMenuHeader">
      <h1>LOGO</h1>
      <FontAwesomeIcon icon={faCircleXmark} onClick={closeHamburgerMenu}/>
    </header>

    <ul className='hamburgerMenuUl'>
      <li className='hamburgerMenuli' onClick={handleClick("promotion")}>
        <span className='hamburgerMenuIcon'><FontAwesomeIcon icon={faFire} /></span>
        <span>Promotions</span>
      </li>
      <li className='hamburgerMenuli' onClick={handleClick("release")}>
        <span className='hamburgerMenuIcon'><FontAwesomeIcon icon={faThumbsUp} /></span>
        <span>Newly release</span>
      </li>
      <li className='hamburgerMenuli'>
        <span className='hamburgerMenuIcon'><FontAwesomeIcon icon={faGifts} /></span>
        <span>Category</span>
      </li>
      <li className='hamburgerMenuli'>
        <span className='hamburgerMenuIcon'><FontAwesomeIcon icon="fa-solid fa-user-check" /></span>
        <span>Members only</span>
      </li>
    </ul>

  </HamburgerMenuModal>
  )
}

export default HamburgerMenu;