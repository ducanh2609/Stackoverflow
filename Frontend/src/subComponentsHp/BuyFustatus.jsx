export default function BuyFustatus(data) {
    return (
        <>
            <div className="hp-item5-body-item">
                <div>{data.icon}</div>
                <div style={{paddingLeft: '12px'}}>{data.title}</div>
            </div>
        </>
    )
}