import React, { useEffect, useState } from 'react';

export default function Animation(props) {
    let show = {
        flexBasis: '33%',
        opacity: 1,
        transform: 'translateX(0)',
        filter: 'blur(0)',
    }
    const [style, setStyle] = useState()
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setStyle(show)
                } else {
                    setStyle()
                }
            })
        })
        const hiddenElement = document.querySelectorAll('.flex-item3');
        hiddenElement.forEach((e) => observer.observe(e));
    })
    return (
        <>

            <div className='flex-item3' style={style}>
                <div>{props.image1}</div>
                <h3 className='tt-title'>{props.h3}</h3>
                <p>{props.p}</p>
            </div>

        </>
    )
}