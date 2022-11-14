import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero"
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import MetabnbNfts from "../Components/MetabnbNfts";
import {data} from "../Home-data"

export default function Home() {
    const cardDetails = data.map(item =>
        <Card
            img={item.img}
            titles={item.title}
            bold={item.bold}
            dist={item.distance}
            avail={item.availability} 
            />
        )

    return (
        <div className="home">
            <Navbar />
            <main>
                <Hero />
                <h1>Inspiration for your next adventure</h1>
                <div className="card--grid">
                    {cardDetails}
                </div>
                <MetabnbNfts />
                <Footer />
            </main>
        </div>
    )
}