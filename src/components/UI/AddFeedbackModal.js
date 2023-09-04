import { createPortal } from 'react-dom';
import './AddFeedbackModal.css';
// import { Backdrop } from './Modal';

export function Backdrop2 (props) {
  return <div className="backdrop2" onClick={props.hideCartHandler}/>
}

export function FeedbackModalOverlay (props) {
  return (
      <div className="modal2">
          <div className="content2">{props.children}</div>
      </div>
  )
}

const portalElement = document.getElementById('addFeedbackOverlays')

export default function AddFeedbackModal (props) {
  return (
    <>
    {createPortal(<Backdrop2 hideCartHandler={props.hideCartHandler}/>,portalElement)}
    {createPortal(<FeedbackModalOverlay>{props.children}</FeedbackModalOverlay>,portalElement)}
    </>
  )
}