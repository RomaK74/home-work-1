import React from 'react';
import './App.css';
import {Phrase} from "./components/Phrase";
import {EmptyBlock} from "./components/EmptyBlock";
import {adjectivesArr} from './data';
import {nounsArr} from './data';

function App() {
    const [phrases, setPhrases] = React.useState([]);

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const addPhrase = () => {
        let ai = getRandomInt(adjectivesArr.length);
        let ai2 = getRandomInt(adjectivesArr.length);
        let ni = getRandomInt(nounsArr.length);
        let newPhrase = adjectivesArr[ai] + ' ' + adjectivesArr[ai2] + ' ' + nounsArr[ni];
        setPhrases(prev => [...prev, newPhrase]);
    }

    return (
        <div className="wrapper">
            {phrases.length !== 0 ? <Phrase phrases={phrases}/> : <EmptyBlock />}
            <button className="btn btn_generate" onClick={addPhrase}>Сгенерировать</button>
            <button className="btn btn_clear" onClick={() => setPhrases([])}>Очистить</button>
        </div>
    )
}

export default App;