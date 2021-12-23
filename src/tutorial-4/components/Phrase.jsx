import React from 'react';

export const Phrase = ({phrases}) => {
    console.log('Phrase.jsx', phrases);
    return (
        <div className="list">
            {phrases.length !== 0 && phrases.map(phrase => <div className="block"><h3>{phrase}</h3></div>)}
        </div>
    )
}