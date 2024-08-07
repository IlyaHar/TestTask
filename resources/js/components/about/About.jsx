import line from "../../../../storage/app/public/images/line.png";
import people_01 from "../../../../storage/app/public/images/people-01.png";
import people_02 from "../../../../storage/app/public/images/people-02.png";
import people_03 from "../../../../storage/app/public/images/people-03.png";
import people_04 from "../../../../storage/app/public/images/people-04.png";
import './about.css'
import './media.css'

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about__content">
                    <div className="about__line">
                        <img src={line} alt="line"/>
                    </div>
                    <div className="about__item">
                        <div className="about__text">
                            <h3 className="about__title">
                                Mit uns erreicht Ihre Anzeige jeden Arbeitssuchenden!
                            </h3>
                            <div className="about__desc">
                                Maximieren Sie die Sichtbarkeit
                                Ihrer Stellenanzeige und finden Sie die besten Talente für
                                Ihr Unternehmen mit mehr als <b>500</b> Partner Stellenbörsen, Regionalportalen und
                                Fachportalen.
                            </div>
                        </div>
                        <div className="about__circle">
                            500
                        </div>
                        <div>
                            <img className="about__image" src={people_01} alt="people"/>
                        </div>
                    </div>
                    <div className="about__item">
                        <div>
                            <img className="about__image" src={people_02} alt="people"/>
                        </div>
                        <div className="about__circle">
                            95%
                        </div>
                        <div className="about__text">
                            <h3 className="about__title">
                                Jedes Unternehmen hat einen Mitarbeiter
                            </h3>
                            <div className="about__desc">
                                Wir haben den Prozess der Stellenveröffentlichung für Sie verbessert. Mit unserem neuen,
                                benutzerfreundlichen Dashboard können Sie den gesamten Rekrutierungsprozess einfach und
                                effizient steuern. In unserer Datenbank sind <b>95%</b> der Lebensläufe vollständig
                                ausgefüllt, was Ihnen umfassende und präzise Informationen über die Qualifikationen der
                                Bewerber liefert..
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="about__text">
                            <h3 className="about__title">
                                Mehr Erfolg durch gezielte Jobschaltung!
                            </h3>
                            <div className="about__desc">
                                Studien zeigen das <b>87%</b> der Unternehmen ihre Mitarbeiter finden, indem sie ihre
                                offenen
                                Stellen ausschreiben. Vertrauen auch Sie auf unsere effiziente Rekrutierungslösung und
                                besetzen Sie Ihre Positionen schnell und zielgerichtet.
                            </div>
                        </div>
                        <div className="about__circle">
                            87%
                        </div>
                        <div>
                            <img className="about__image" src={people_03} alt="people"/>
                        </div>
                    </div>
                    <div className="about__item">
                        <div>
                            <img className="about__image" src={people_04} alt="people"/>
                        </div>
                        <div className="about__circle">
                            100%
                        </div>
                        <div className="about__text">
                            <h3 className="about__title">
                                Ausgezeichnete Kundenservice
                            </h3>
                            <div className="about__desc">
                                <ul>
                                    <li>
                                        <b>100%</b> Myself-Service veröffentlichen Sie sofort Ihre Stellenanzeigen
                                        online.
                                    </li>
                                    <li>
                                        Entscheiden Sie sich für Premium-Stellenanzeige und profitieren Sie von einem
                                        ansprechenden Employer-Profil-Design
                                    </li>
                                    <li>
                                        Ein fester Ansprechpartner kümmert sich persönlich um all Ihre Anliegen.
                                    </li>
                                </ul>
                                <span>Nutzen Sie unsere Kostenlose Kundenservice <br />Mo - Fr. 10.00 bis 22.00 Uhr</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About
