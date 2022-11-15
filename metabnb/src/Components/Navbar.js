import Logo from "../images/Logo.png"
import { Link } from "react-router-dom"
import Modal from "./Modal"
import { useState } from "react"
import menu from "../images/menu.png"
import Ham from "./Hamburger"

export default function Navbar() {
    const [show, setShow] = useState(false)
    const [ham, setHam] = useState(false)
    return (
        <section>
            <nav>
                <img className="logo" src={Logo} alt="logo" />
                <ul className="nav-links">
                    <li><Link className="link" to={'/'}>Home</Link></li>
                    <li><Link className="link" to={'/place-to-stay'}>Place to stay</Link></li>
                    <li><Link className="link" to={'/'}>NFTs</Link></li>
                    <li><Link className="link" to={'/'}>Community</Link></li>
                </ul>
                <input onClick={() => setShow(true)} className="button" type={'button'} value={'Connect wallet'} />
                <Modal onClose={() => setShow(false)} show={show} />
            </nav>
            <div className="hamburger--menu">
                <img className="logo" src={Logo} alt="logo" />
                <input onClick={() => setShow(true)} className="button" type={'button'} value={'Connect wallet'} />
                <Modal onClose={() => setShow(false)} show={show} />
                <img onClick={() => setHam(true)} className="menu-icon" src={menu} alt="" />
            </div>
            <Ham onClose={() => setHam(false)} show={ham} />
        </section>
    )
}