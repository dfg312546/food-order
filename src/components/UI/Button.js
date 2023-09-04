import './Button.css'

function Button (props) {

    const combinedClasses = 'buttonStyle ' + props.className

    return (
        <button className={combinedClasses} onClick={props.onClick}>
            {props.children}
        </button>
    )
};

export default Button;