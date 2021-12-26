import React from 'react';

export const Phrase = ({phrases}) => (
        <div className="list">
            {phrases.length !== 0 && phrases.map(phrase => <div className="block"><h3>{phrase}</h3></div>)}
        </div>
);