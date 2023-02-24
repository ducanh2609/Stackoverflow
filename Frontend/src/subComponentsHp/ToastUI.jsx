import Toast from './Toast';
import { useState } from 'react';
export default function ToastUI() {
    let succsess =
    {
        id: 1,
        title: 'Success',
        description: 'This is a success toast component',
        icon: <i className="fa-solid fa-circle-check"></i>,
        style: {
            backgroundColor: 'rgb(25, 164, 41)',
        }
    }
    let unsuccess =
    {
        id: 2,
        title: 'Error',
        description: 'This is an error toast component',
        icon: <i className="fa-solid fa-circle-exclamation"></i>,
        style: {
            backgroundColor: 'rgb(207, 39, 39)'
        }
    }

    const [style, setStyle] = useState({ display: 'none' });
    const [toastList, setToastList] = useState({});

    function showToast() {
        setToastList(succsess);
        setStyle({ display: 'block' });
        const timeOut = setTimeout(() => {
            setStyle(style);
        }, 4000);
        return () => clearTimeout(timeOut)
    }
    function closeToast() {
        setStyle({ display: 'none' });
    }
    return (<>
        {/* <div style={{ display: 'flex' }}>
            <button onClick={showToast}>True</button>
        </div> */}
        <Toast close={closeToast} toastArray={toastList} style={style} />
    </>)
}
