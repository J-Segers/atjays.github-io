import React, { createContext, useEffect, useState } from 'react';

export const CardContext = createContext(null);

function CardContextProvider({children}) {
    
    const [showFront, setShowFront] = useState(true);
    const [cardStyle, setCardStyle] = useState("card");
    const [zoomedIn, setZoomedIn] = useState(false);
    
    useEffect(() => {
        if(zoomedIn && cardStyle !== "card-grown") {
            setCardStyle("card-growing");
            const interval = setInterval(() => {
                setCardStyle("card-grown");
            }, 450);
            return () => clearInterval(interval);
        }

        if(!zoomedIn && cardStyle !== "card") {
            setCardStyle("card-shrinking");
            const interval = setInterval(() => {
                setCardStyle("card");
            }, 500);
            return () => clearInterval(interval);
        }
    }, [zoomedIn, cardStyle]);

    const data = {
        showFront,
        setShowFront,
        cardStyle,
        zoomedIn,
        setZoomedIn,
    }
    
    return (
        <CardContext.Provider value={data}>
            {children}
        </CardContext.Provider>
    );

}

export default CardContextProvider;