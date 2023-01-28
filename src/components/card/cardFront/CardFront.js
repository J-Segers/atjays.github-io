import React, { useContext } from 'react';
import { CardContext } from '../../context/CardContextProvider';
import './CardFront.css';

function CardFront() {
    
    const { setShowFront, setZoomedIn } = useContext(CardContext);

    return (
        <div id={"card-front"} onClick={() => {
            setShowFront(false);
            setZoomedIn(true);
            }}>
            <h1>
                @Jays
            </h1>
        </div>
    );
}

export default CardFront;