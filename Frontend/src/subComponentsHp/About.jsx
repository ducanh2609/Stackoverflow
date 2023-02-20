export default function Apout(props) {
    return (
        <>
            <div className="hp-flex-item9">
                <a href='/'>
                    <div className="hp-flex-item9-img">{props.image}</div>
                    <p>{props.about}</p>
                </a>
            </div>
        </>
    )
}