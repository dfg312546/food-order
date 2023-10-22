import StateContext from '../../../store/context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HamburgerMenuModal from "../../UI/hamburgerMenuModal";
import './hamburgerMenu.css'
import { FaUserCheck,FaFire,FaThumbsUp,FaCircleXmark, FaGifts,FaPersonWalking } from "react-icons/fa6";
import Button from '../../UI/Button'
import { auth } from '../../AuthPage/auth';

function HamburgerMenu(props) {
  const Ctx = useContext(StateContext)
  const navigate = useNavigate();

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

  const navToLogIn = () => {
    props.setHamburgerMenu(true);
    navigate('/login')
  }

  return (
  <HamburgerMenuModal hamburgerMenu={props.hamburgerMenu} setHamburgerMenu={props.setHamburgerMenu}>
    <div className='hamburgerMenuContainer' >
    <header className="hamburgerMenuHeader">
      <h2>LOGO</h2>
      <FaCircleXmark onClick={closeHamburgerMenu}/>
    </header>

    <div className='hamburgerMenuBody'>
    { Ctx.isLogIn &&
      <div className='hamburgerMenuUser'>
        <img src={auth.currentUser.photoURL} alt="profile"/>
        <p>Hello ! {auth.currentUser.displayName}</p>
      </div>
     }

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
    </div>


    <div className='hamburgerMenuFooter' >
    {Ctx.isLogIn ? 
      <Button onClick={Ctx.logOut} className='hamburgerMenuBtn'>Log Out</Button>
       :
      <Button className='hamburgerMenuBtn' onClick={navToLogIn}>
        <FaPersonWalking />
        <span>Log In</span>
      </Button>
    }
    </div>
    </div>
  </HamburgerMenuModal>
  )
}

export default HamburgerMenu;