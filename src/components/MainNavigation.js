import StateContext from '../store/context';
import { useContext } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { FaHouseChimney } from "react-icons/fa6";
import { MdPlace,MdQuestionMark } from "react-icons/md";
import { BiSolidMessageEdit } from "react-icons/bi";
import Button from "./UI/Button";
import style from './MainNavigation.module.css'

function MainNavigation () {
  const Ctx = useContext(StateContext);

  return (
  <>
  <nav className={style.mainNavStyle}>
    <h1>LOGO</h1>
    <ul>
        <li className={style.li}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? style.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink
            to="/offlineStore"
            className={({ isActive }) =>
              isActive ? style.active : undefined
            }
          >
            Offline Store
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink
            to="/Q&A"
            className={({ isActive }) =>
              isActive ? style.active : undefined
            }
          >
            Q & A
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? style.active : undefined
            }
          >
            Contact us
          </NavLink>
        </li>
    </ul>
    <section>
        {Ctx.isLogIn ? 
          <p>Hello !<br /> {Ctx.user.email}</p> : 
          <Button className={style.logInButtonStyle}>
            <Link to='/login'>Log In</Link>
          </Button>}

          {Ctx.isLogIn && <Button onClick={Ctx.logOut} className={style.logInButtonStyle}>Log Out</Button>}

    </section>
  </nav>

  <ul className={style.mobileMainNav}>
    <li className={style.mobileMainNavLi}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? style.active : undefined
          }
          end
        >
          <span className={style.icon}><FaHouseChimney /></span>
          <span className={style.text}> Home</span>
        </NavLink>
    </li>
    <li className={style.mobileMainNavLi}>
        <NavLink
          to="/offlineStore"
          className={({ isActive }) =>
            isActive ? style.active : undefined
          }
        >
          <span className={style.icon}><MdPlace /></span>
          <span className={style.text}>Offline Store</span>
        </NavLink>
    </li>
    <li className={style.mobileMainNavLi}>
      <NavLink
        to="/Q&A"
        className={({ isActive }) =>
          isActive ? style.active : undefined
        }
      >
        <span className={style.icon}><MdQuestionMark /></span>
        <span className={style.text}>Q & A</span>
      </NavLink>
    </li>
    <li className={style.mobileMainNavLi}>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? style.active : undefined
        }
      >
        <span className={style.icon}><BiSolidMessageEdit /></span>
        <span className={style.text}>Contact us</span>
      </NavLink>
    </li>
  </ul>

  </>
  )
};

export default MainNavigation;