import Logo from "../images/Logo-bw.png"
import FB from "../images/fb-icon.png"
import IG from "../images/instagram-icon.png"
import twitter from "../images/twitter-icon.png"

export default function Footer() {
    return (
        <footer>
            <div className="footer--icons">
                <img src={Logo} alt="" />
                <div className="footer--socials">
                    <img src={FB} alt="" />
                    <img src={IG} alt="" />
                    <img src={twitter} alt="" />
                </div>
                <p>©2022 Metabnb</p>
            </div>
            <div className="footer--community">
                <h4 className="footer--title">Community</h4>
                <a href="https://www.twitter.com/wineshuga">NFT</a> 
                <a href="https://www.twitter.com/wineshuga">Tokens</a> 
                <a href="https://www.twitter.com/wineshuga">Landlords</a> 
                <a href="https://www.twitter.com/wineshuga">Discord</a> 
            </div>
            <div className="footer--places">
            <h4 className="footer--title">Places</h4>
                <a href="https://www.linkedin.com/in/uziwinnie">Castle</a> 
                <a href="https://www.linkedin.com/in/uziwinnie">Farms</a> 
                <a href="https://www.linkedin.com/in/uziwinnie">Beach</a> 
                <a href="https://www.linkedin.com/in/uziwinnie">Learn more</a> 
            </div>
            <div className="footer--about">
            <h4 className="footer--title">About us</h4>
                <a href="https://www.linkedin.com/in/uziwinnie">Road map</a> 
                <a href="https://www.linkedin.com/in/uziwinnie">Creators</a> 
                <a href="https://www.linkedin.com/in/uziwinnie">Career</a> 
                <a href="https://www.linkedin.com/in/uziwinnie">Contact us</a> 
            </div>
        </footer>
    )
}