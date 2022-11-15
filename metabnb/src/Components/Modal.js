import wolf from "../images/wolfhead.png"
import wallet from "../images/wallet-connect.png"
import close from "../images/close-icon.svg"
import { useEffect } from "react"

const Modal = props => {
    useEffect(() => {

    }, [])
    // if (!props.show) {
    //     return null
    // }
    return (
        <div className={`main--modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div id="modal" className="modal" onClick={e => e.stopPropagation()}>
                <div>
                <img onClick={props.onClose} className="modal--close_icon" src={close} alt="" />
                <h3 className="modal--header">Connect Wallet</h3>
                <hr />
                <p className="modal--text">Choose your preferred wallet:</p>
                <div className="modal--group_buttons">
                    <button className="modal--button"><img src={wolf} alt="" /><span className="bold">Metamask</span></button>
                    <button className="modal--button"><img src={wallet} alt="" /><span className="bold">WalletConnect</span></button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;