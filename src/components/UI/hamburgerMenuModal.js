import { createPortal } from 'react-dom';
import './hamburgerMenuModal.css';
// import { Backdrop } from './Modal';



export function Backdrop3 (props) {
  function closeHamburgerMenu(){
    props.setHamburgerMenu(true)
  };

  return <div className={`backdrop3 ${props.hamburgerMenu ? '' : 'show'}`} onClick={closeHamburgerMenu}/>
}

export function HamburgerMenuModalOverlay (props) {
  const isActive = `modal3 ${props.hamburgerMenu ? '' : 'open'}`
  return (
      <div className={isActive}>
          <div className="content3">{props.children}</div>
      </div>
  )
}

const portalElement = document.getElementById('hamburgerMenuOverlays')

export default function HamburgerMenuModal (props) {

  return (
    <>
    {createPortal(<Backdrop3 hamburgerMenu={props.hamburgerMenu} setHamburgerMenu={props.setHamburgerMenu}/>,portalElement)}
    {createPortal(<HamburgerMenuModalOverlay hamburgerMenu={props.hamburgerMenu} setHamburgerMenu={props.setHamburgerMenu}>{props.children}</HamburgerMenuModalOverlay>,portalElement)}
    </>
  )
}