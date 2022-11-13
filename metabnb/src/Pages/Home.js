import Navbar from "../Components/Navbar";
import HeroImg from "../Assets/Homepage1.png";
import Token from "../Assets/Mbtoken.png"
import Mask from "../Assets/Metamask.png"
import Opensea from "../Assets/Opensea.png"
import Card from "../Components/Card";

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <main>
                <section className="home--hero">
                    <div className="home--hero_text">
                        <h1>Rent a <span className="purple">Place</span> away from <span className="purple">Home</span> in the <span className="purple">Metaverse</span></h1>
                        <p>we provide you access to luxury and affordable houses in the metaverse,
                            get a chance to turn your imagination to reality at your comfort zone</p>
                        <input className="home--hero_searchbox" type={'search'} placeholder="Search for location" />
                        <input type={'submit'} value="Search" className="button searchbox" />
                    </div>
                    <img className="home--hero_img" src={HeroImg} alt="" />
                </section>
                <div className="home--hero_footer">
                    <img src={Token} alt="" />
                    <img src={Mask} alt="" />
                    <img src={Opensea} alt="" />
                </div>
                <Card />
            </main>
        </div>
    )
}