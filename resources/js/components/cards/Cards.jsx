import job from "../../../../storage/app/public/images/icons/job.svg";
import lamp from "../../../../storage/app/public/images/icons/lamp.svg";
import things from "../../../../storage/app/public/images/icons/things.svg";
import directory from "../../../../storage/app/public/images/icons/directory.svg";
import image from "../../../../storage/app/public/images/icons/image.svg";
import point from "../../../../storage/app/public/images/icons/point.svg";
import clip from "../../../../storage/app/public/images/icons/clip.svg";
import clip_black from "../../../../storage/app/public/images/icons/clip_black.svg";
import close from "../../../../storage/app/public/images/icons/close.svg";
import plus from "../../../../storage/app/public/images/icons/plus.svg";
import './cards.css';
import './media.css'
import Modal from "../modal/modal.jsx";
import React, {useEffect, useState} from "react";
import Card from "./Card.jsx";
import axios from "axios";


function Cards() {
    const [modalActive, setModalActive] = useState(false)
    const [cards, setCards] = useState([])
    const [newCard, setNewCard] = useState({ title: '', details: ''})
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('/api/cards')
            .then(res => {
                setCards(res.data.data);
            })
    }, []);

    const deleteCard = (id) => {
        axios.delete(`/api/cards/${id}`)
            .then(res => {
                setCards((prevCards) => prevCards.filter(card => card.id !== id))
            })
    }

    const addCard = () => {
        axios.post('/api/cards', newCard)
            .then(res => {
                setCards((prevCards) => [...prevCards, res.data.data]);
                setNewCard(prevNewCard => ({ title: '', details: '' }));
                setErrors([]);
                setModalActive(false);
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <section className="cards">
            <div className="container">
                <div className="cards__content">
                    <h2 className="cards__title">
                        Wie können wir Ihnen <span>weiterhelfen?</span>
                    </h2>
                    <div className="cards__row">
                        <Card key="static-job" card={{ title: 'Passende Kandidaten finden', details: 'Mitarbeiter finden -  So funktioniert´s. Erfahren Sie mehr über unseren Stellenanzeigen.', icon: job }} />
                        <Card key="static-lamp" card={{ title: 'WORKBERRY HR-Tipps', details: 'Vertiefen und erweitern Sie Ihr Wissen durch die vielfältigen Studien und Blog-Beiträge, die wir bereitstellen.', icon: lamp }} />
                        <Card key="static-things" card={{ title: 'Hilfe & Schullungen', details: 'Hier finden Sie Antworten auf alle Ihre Fragen über Nutzung von WORKBERRY Jobbörse.', icon: things }} />
                        {
                            cards.map(card => (
                                <Card card={card} key={card.id} deleteCard={deleteCard}  />
                            ))
                        }
                    </div>
                </div>
                <div className="add__card" onClick={() => setModalActive(true)}>
                    <img src={plus} alt=""/>
                    <span>Hinzufügen</span>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}  >
                <div className="modal__text">
                    <h3 className="modal__title">
                        Hinzufügen
                    </h3>
                    <button className="modal__close" onClick={() => setModalActive(false)}>
                        <img src={close} alt="close"/>
                    </button>
                </div>
                <div className="modal__form">
                    <div className="form__content">
                        <div className="form__title">
                            <img src={directory} alt="directory"/>
                            <h3 className="modal__title">
                                Fügen Sie einen Block hinzu
                            </h3>
                        </div>
                        <div className="form__text">
                            Bitte geben Sie alle erforderlichen Informationen ein, um einen Block hinzuzufügen.
                        </div>
                        <div className="form__image__content">
                            <div className="form__image">
                                <img src={image} alt="image"/>
                            </div>
                            <div className="form__image__text">
                                <div>
                                    <img src={point} alt="point"/>
                                </div>
                                <div className='text'>
                                    Das Icon sollte klar erkennbar sein. Vermeiden Sie komplexe Details und stellen Sie
                                    sicher,
                                    dass es gut sichtbar ist. Farben sollten ansprechend und professionell wirken,
                                    passend
                                    zur Marke oder Unternehmensidentität
                                </div>
                            </div>
                        </div>
                        <div className="form__image__formats">
                            <div>
                                <img src={clip} alt="clip"/>
                            </div>
                            <div className="formats__text">
                                *png, *jpg, *jpeg, *svg
                            </div>
                        </div>
                        <button className="image__btn">
                            Icon hochladen
                            <img src={clip_black} alt="clip"/>
                        </button>
                        <div className="main__form">
                            <div className="form__input">
                                <label className="form__label" htmlFor="title">Titel<span>*</span></label>
                                <input value={newCard.title} type="text" id='title'  placeholder="BRUTIS GmbH" onChange={(e) => setNewCard({...newCard, title: e.target.value})} />
                                <span className="error">{ errors.title && errors.title }</span>
                            </div>
                            <div className="form__input">
                                <label className="form__label" htmlFor="details">Details (Optional)</label>
                                <textarea value={newCard.details} id="details" placeholder="BRUTIS GmbH" onChange={(e) => setNewCard({...newCard, details: e.target.value})}></textarea>
                            </div>
                            <div className="form__btns">
                                <button className="form__btn__white"  onClick={() => setModalActive(false)}>
                                    Doch nicht
                                </button>
                                <button onClick={addCard} className="form__btn__blue">
                                    Speichern
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    )
        ;
}

export default Cards
