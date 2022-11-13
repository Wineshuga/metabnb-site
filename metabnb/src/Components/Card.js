import Star from "./Star"
import {images} from "../Assets/Home-images"

export default function Card() {
    const pics = images.map(item => item.img)
    return(
        <div className="card">
            <img src={pics} alt="" />
            <div className="card--text_title">
            <p>Desert king</p>
            <p><b>1MBT per night</b></p>
            </div>
            <div className="card--text_details">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
            </div>
            <Star /><Star /><Star /><Star /><Star />
        </div>
    )
}