import { NavLink } from 'react-router-dom';
import { FaHouseChimney } from "react-icons/fa6";
import { MdPlace,MdQuestionMark } from "react-icons/md";
import { BiSolidMessageEdit } from "react-icons/bi";
import Button from "./UI/Button";
import './MainNavigation.css'

function MainNavigation () {
  return (
  <>
  <nav className='mainNavStyle'>
    <h1>LOGO</h1>
    <ul>
        <li className='li'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className='li'>
          <NavLink
            to="/offlineStore"
            className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
          >
            Offline Store
          </NavLink>
        </li>
        <li className='li'>
          <NavLink
            to="/Q&A"
            className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
          >
            Q & A
          </NavLink>
        </li>
        <li className='li'>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
          >
            Contact us
          </NavLink>
        </li>
    </ul>
    <section>

        <Button className='logInButtonStyle'>
            Log In
        </Button>
    </section>
  </nav>

  <ul className="mobileMainNav">
    <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'active' : undefined
          }
          end
        >
          <span className='icon'><FaHouseChimney /></span>
          <span className='text'> Home</span>
        </NavLink>
    </li>
    <li>
        <NavLink
          to="/offlineStore"
          className={({ isActive }) =>
            isActive ? 'active' : undefined
          }
        >
          <span className='icon'><MdPlace /></span>
          <span className='text'>Offline Store</span>
        </NavLink>
    </li>
    <li>
      <NavLink
        to="/Q&A"
        className={({ isActive }) =>
          isActive ? 'active' : undefined
        }
      >
        <span className='icon'><MdQuestionMark /></span>
        <span className='text'>Q & A</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          isActive ? 'active' : undefined
        }
      >
        <span className='icon'><BiSolidMessageEdit /></span>
        <span className='text'>Contact us</span>
      </NavLink>
    </li>
  </ul>
  </>
  )
};

export default MainNavigation;