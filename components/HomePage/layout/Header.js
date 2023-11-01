import './Header.css'
import HeaderCartButton from './HeaderCartButton';
import { FaUserCheck,FaFire,FaThumbsUp,FaBars, FaGifts } from "react-icons/fa6";




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
                <span className='headerIcon'><FaFire /></span>
                <span>Promotions</span>
            </li>
            <li className='li' onClick={handleClick("release")}>
                <span className='headerIcon'><FaThumbsUp /></span>
                <span>Newly release</span>
            </li>
            <li className='li'>
                <span className='headerIcon'><FaGifts /></span>
                <span>Category</span>
            </li>
            <li className='li'>
                <span className='headerIcon'><FaUserCheck /></span>
                <span>Members only</span>
            </li>
        </ul>

        <FaBars onClick={clickHamburgerMenu} className='hamburgermenu' />

        <h1 className='mobileLogo'>LOGO</h1>

        <HeaderCartButton className='HeaderCartButton' showCartHandler={props.showCartHandler}/>
    </header>
    </>
    )
};

export default Header