import React, { useContext } from 'react';
import { CardContext } from '../context/CardContextProvider';
import "./Card.css";
import CardBack from './cardBack/CardBack';
import CardFront from './cardFront/CardFront';

function Card() {

    const { cardStyle } = useContext(CardContext)

    return (
        <div id={cardStyle}>
            <CardFront />
            <CardBack />
        </div>
    );
}

export default Card;