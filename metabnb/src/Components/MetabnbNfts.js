import Photo from "../images/Homepage2.png"

export default function MetabnbNfts() {
    return (
        <section className="meta-section">
            <div className="meta-section--text">
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFT gift cards collection. 
                    Loyal customers gets amazing gift cards which 
                    are traded as NFTs. These NFTs gives our cutomer 
                    access to loads of our exclusive services.
                </p>
                <input className="button button-nfts" type={'button'} value="Learn more" />
            </div>
            <img className="meta-section--photo" src={Photo} alt="" />
        </section>
    )
}