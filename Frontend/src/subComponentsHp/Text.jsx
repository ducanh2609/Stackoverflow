function Text(props) {
    return (
        <>
            <div className='hp-flex-item6'>
                <span className='bg-wh'>{props.p1}</span>
                <span className="bg-bl"> {props.p2} </span>
                <span className='bg-wh'>{props.p3}</span>
            </div>
        </>
    )
}

export default Text;