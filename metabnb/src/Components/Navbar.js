import Logo from "../images/Logo.png"
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <img className="logo" src={Logo} alt="logo" />
            <ul className="nav-links">
                <li><Link className="link" to={'/'}>Home</Link></li>
                <li><Link className="link" to={'/place-to-stay'}>Place to stay</Link></li>
                <li><Link className="link" to={'/'}>NFTs</Link></li>
                <li><Link className="link" to={'/'}>Community</Link></li>
            </ul>
            <input className="button" type={'button'} value={'Connect wallet'}/>
        </nav>
    )
}