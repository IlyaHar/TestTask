import destroy from "../../../../storage/app/public/images/icons/delete.svg";
import files from "../../../../storage/app/public/images/icons/files.svg";
import './cards.css';
import './media.css'
import React, {useState} from "react";


function Card({ card, deleteCard }) {

    return (
        <div className="card">
            <div className="card__content">
                <img className="card__icon" src={card.icon ? card.icon : files} alt=""/>
                <h3 className="card__title">
                    {card.title}
                </h3>
                <button disabled={!card.id} className="destroy__icon" onClick={() => deleteCard(card.id)}>
                    <img src={destroy} alt=""/>
                </button>
            </div>
            <div className="card__text">
                {card.details ? card.details : ''}
            </div>
        </div>
    );
}

export default Card
