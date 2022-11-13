import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Setting from "../Assets/setting-5.png"

export default function Place() {
    return (
        <div className="place">
            <Navbar />
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
                <button className="place--location_btn">Location <img src={Setting} alt="" /></button>
            </div>
            <Footer />
        </div>
    )
}