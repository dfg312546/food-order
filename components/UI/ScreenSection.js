import style from './ScreenSection.module.css'

function ScreenSection (props) {
    return (
        <div className={style.screenContainer} {...props}>
            {props.children}
        </div>
    )
};

export default ScreenSection