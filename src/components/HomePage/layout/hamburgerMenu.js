import HamburgerMenuModal from "../../UI/hamburgerMenuModal";
import './hamburgerMenu.css'
import { FaUserCheck,FaFire,FaThumbsUp,FaCircleXmark, FaGifts } from "react-icons/fa6";

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
      <FaCircleXmark onClick={closeHamburgerMenu}/>
    </header>

    <ul className='hamburgerMenuUl'>
      <li className='hamburgerMenuli' onClick={handleClick("promotion")}>
        <span className='hamburgerMenuIcon'><FaFire /></span>
        <span>Promotions</span>
      </li>
      <li className='hamburgerMenuli' onClick={handleClick("release")}>
        <span className='hamburgerMenuIcon'><FaThumbsUp /></span>
        <span>Newly release</span>
      </li>
      <li className='hamburgerMenuli'>
        <span className='hamburgerMenuIcon'><FaGifts /></span>
        <span>Category</span>
      </li>
      <li className='hamburgerMenuli'>
        <span className='hamburgerMenuIcon'><FaUserCheck /></span>
        <span>Members only</span>
      </li>
    </ul>

  </HamburgerMenuModal>
  )
}

export default HamburgerMenu;