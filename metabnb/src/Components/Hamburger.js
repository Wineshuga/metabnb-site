import { Link } from "react-router-dom"
import close from "../images/close.png"

const Hamburger = props => {
    if (!props.show) {
        return null
     }
    return (
        <div className="hamburger">
            <div className="ham--content">
                <img onClick={props.onClose} className="close-icon" src={close} alt="" />
                <ul className="ham--links">
                    <li><Link className="link" to={'/'}>Home</Link></li>
                    <li><Link className="link" to={'/place-to-stay'}>Place to stay</Link></li>
                    <li><Link className="link" to={'/'}>NFTs</Link></li>
                    <li><Link className="link" to={'/'}>Community</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Hamburger;