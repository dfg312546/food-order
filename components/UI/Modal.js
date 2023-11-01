import style from './Modal.module.css'
import { createPortal } from 'react-dom';

export function Backdrop (props) {
    return <div className={style.backdrop} onClick={props.hideCartHandler}/>
}

export function ModalOverlay (props) {
    return (
        <div className={style.modal}>
            <div className={style.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('cartOverlays')

export default function Modal (props) {
    return (
        <>
        {createPortal(<Backdrop hideCartHandler={props.hideCartHandler}/>,portalElement)}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </>
    )
}