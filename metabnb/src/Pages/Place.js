import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Card from "../Components/Card"
import { data } from "../All-data"

export default function Place() {
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
        <div className="place">
            <Navbar />
            <div className="place--hide_nav">
                <div>
                <select className="place--option_bar">
                    <option>Resturant</option>
                    <option>Cottage</option>
                    <option>Castle</option>
                    <option>fantast city</option>
                    <option>beach</option>
                    <option>Carbins</option>
                    <option>Off-grid</option>
                    <option>Farm</option>
                </select>
                </div>
                <div className="place--second_nav">
                    <ul>
                        <li>Resturant</li>
                        <li>Cottage</li>
                        <li>Castle</li>
                        <li>fantast city</li>
                        <li>beach</li>
                        <li>Carbins</li>
                        <li>Off-grid</li>
                        <li>Farm</li>
                    </ul>
                </div>
                <input className="place--location_btn" type={'text'} placeholder="Location" />
            </div>
            <div className="card--grid">
                {cardDetails}
            </div>
            <Footer />
        </div>
    )
}