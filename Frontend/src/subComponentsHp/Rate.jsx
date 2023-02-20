export default function Rate(props) {
    return (
        <>
            <div className="hp-flex-item8">
                <div className="hp-flex-item8-img">
                    {props.image} 
                </div>
                <p className="hp-flex-item8-p">{props.rate}</p>
                <div className="hp-flex-item8-2p">
                    <strong>
                        {props.position}
                    </strong>   <br />
                    {props.user}
                </div>
            </div>
        </>
    )
}