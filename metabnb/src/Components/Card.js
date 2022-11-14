import Star from "./Star"

export default function Card(props) {
    return(
        <div className="card">
            <img src={props.img} alt="" />
            <div className="card--text_title">
            <p>{props.titles}</p>
            <p>{props.bold}</p>
            </div>
            <div className="card--text_details">
                <p>{props.dist}</p>
                <p>{props.avail}</p>
            </div>
            <Star /><Star /><Star /><Star /><Star />
        </div>
    )
}