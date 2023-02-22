import React, { useEffect, useState } from 'react';
export default function Animation2 (props)  {
    let showItem = {
        opacity: 1,
        transform: 'translateX(0)',
         
    }
    const [style,setStyle] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setStyle(showItem);
                } else {
                    setStyle();
                }
            })
        })
        const hiddenElement = document.querySelectorAll('.hp-flex-item12');
        hiddenElement.forEach((e) => observer.observe(e));
    })
    return (
        <>
            <div className='hp-flex-item12 hidden-item' style={style}>
                <div className='hp-flex-item12-imgdiv'>{props.img}</div>
                <div className='hp-flex-item12-text'>{props.text}</div>
            </div>
        </>
    )
}