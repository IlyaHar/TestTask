import './info.css'
import './media.css'

function Info() {
    return (
        <section className="info">
            <div className="container">
                <div className="info__content">
                    <h3 className="info__title">
                        Fachwissen trifft auf Qualität:
                        <br />
                        <span>
                            Ihre Vorteile mit WORKBERRY
                        </span>
                    </h3>
                    <div className="info__text">
                        Mit täglich über 300 Neuanmeldungen sind wir die am
                        schnellsten wachsende Jobbörse in Deutschland. Wir bringen Arbeitgeber und Arbeitssuchende schnell
                        und effektiv zusammen – sowohl in Vollzeit, Teilzeit, befristet, als auch auf Stundenbasis über alle
                        Branchen und Fachgebiete hinweg.
                    </div>
                </div>
                <div className="info__row">
                    <div className="info__block">
                        <h3 className="info__block__title">
                            Hirring UA
                        </h3>
                        <div className="info__block__text">
                            Verlassen Sie sich auf eine der meistbesuchte Online - Plattform für Fachkräfte aus der
                            Ukraine.
                        </div>
                    </div>
                    <div className="info__block__border"></div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            Maximale Reichweite
                        </h3>
                        <div className="info__block__text">
                            Profitieren Sie von unseren Partner- Netzwerken und schalten Síe Ihre Stellenangebote in
                            mehr als 500 Jobbörsen mit einem Klick
                        </div>
                    </div>
                    <div className="info__block__border"></div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            Employer Branding
                        </h3>
                        <div className="info__block__text">
                            Unsere Unternehmens - Hub mit Individuell entwickelten Layouts und Stellenanzeigen Design
                            steht Ihnen Kostenlos zur Verfügung.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info
