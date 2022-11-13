import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero"
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import MetabnbNfts from "../Components/MetabnbNfts";

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <main>
                <Hero />
                <Card />
                <MetabnbNfts />
                <Footer />
            </main>
        </div>
    )
}