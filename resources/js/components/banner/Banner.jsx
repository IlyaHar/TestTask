import arrow from "../../../../storage/app/public/images/icons/arrow.svg";
import './banner.css'

function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__content">
                    <h1 className="banner__title">
                        Hilfe & Schullungen
                    </h1>
                    <p className="banner__text">
                        Hier finden Sie Antworten auf alle Ihre Fragen über Nutzung von WORKBERRY Jobbörse.
                    </p>
                    <button className="banner__btn">
                        <span>Stellenanzeige  auswählen</span>
                        <img src={arrow} alt=""/>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Banner
