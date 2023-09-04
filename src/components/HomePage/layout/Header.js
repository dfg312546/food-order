import './Header.css'
import HeaderCartButton from './HeaderCartButton';
// import HamburgerMenu from './hamburgerMenu'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck,faFire,faThumbsUp,faGifts,faBars } from '@fortawesome/free-solid-svg-icons';


library.add(faUserCheck,faFire,faThumbsUp,faGifts,faBars);


function Header (props) {

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
      };

    function clickHamburgerMenu() {
        props.setHamburgerMenu(false);
    }

    return (
    <>
    <header className='headerStyle'>
        <h1 className='headerItem'>線上訂餐</h1>

        <ul className='headerUl'>
            <li className='li' onClick={handleClick("promotion")}>
                <span className='headerIcon'><FontAwesomeIcon icon={faFire} /></span>
                <span>Promotions</span>
            </li>
            <li className='li' onClick={handleClick("release")}>
                <span className='headerIcon'><FontAwesomeIcon icon={faThumbsUp} /></span>
                <span>Newly release</span>
            </li>
            <li className='li'>
                <span className='headerIcon'><FontAwesomeIcon icon={faGifts} /></span>
                <span>Category</span>
            </li>
            <li className='li'>
                <span className='headerIcon'><FontAwesomeIcon icon="fa-solid fa-user-check" /></span>
                <span>Members only</span>
            </li>
        </ul>

        <FontAwesomeIcon onClick={clickHamburgerMenu} className='hamburgermenu' icon={faBars} />

        <h1 className='mobileLogo'>LOGO</h1>

        <HeaderCartButton className='HeaderCartButton' showCartHandler={props.showCartHandler}/>
    </header>
    </>
    )
};

export default Header