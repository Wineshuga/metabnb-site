import { Link } from "react-router-dom"
import close from "../images/close.png"
import Modal from "./Modal"
import { useState } from "react"

const Hamburger = props => {
    const [show, setShow] = useState(false)

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
                <input onClick={() => setShow(true)} className="button" type={'button'} value={'Connect wallet'} />
                <Modal onClose={() => setShow(false)} show={show} />
            </div>
        </div>
    )
}
export default Hamburger;