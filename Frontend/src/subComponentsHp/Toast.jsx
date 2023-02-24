import '../css/toast.css';
export default function Toast(props) {
    return (
        <div style={props.style}>
            <div className='notification-container top-right' style={props.toastArray.style}>
                <div className='notification-property'>
                    <div className='notification-img'>
                        {props.toastArray.icon}
                    </div>
                    <div>
                        <div className='notification-text'>
                            <p className='notification-title'>{props.toastArray.title}</p>
                            <p className='notification-message'>{props.toastArray.description}</p>
                        </div>
                    </div>
                    <button onClick={props.close} className='notification-btn'>X</button>
                </div>
            </div>
        </div>
    )
}
