import BuyFustatus from './BuyFustatus';
function BuyForyou(props) {
    return (
        <>
            <div className='hp-flex-item5'>
                <div className='hp-item5-all'>
                    <h4 style={props.style} className='hp-flex-item5-h4'>{props.service}</h4>
                    <div className='hp-item5-head'>
                        <h3 className='hp-flex-item5-h3'>{props.price}</h3>
                        <p className='hp-flex-item5-p'>{props.intro}</p>
                    </div>
                    <div className='hp-item5-body'>
                        {props.p.map((item,index) => (
                            <BuyFustatus key={index} icon={item.icon} title={item.title} 
                            />
                        ))}
                    </div>
                    <div className='hp-likeBtn'>
                        <div style={props.style} className='likeButton5 wt-hover'><a style={props.style1} href='/'>{props.button}</a> </div>
                    </div>
                    <p className='hp-flex-item5-p p2'>{props.quantity}</p>
                </div>
            </div>
        </>
    )
}

export default BuyForyou;