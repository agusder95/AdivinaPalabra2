import { createContext, useEffect, useState } from 'react';


const ScoreContext = createContext();


export const ScoreContextProvider = ({ children }) => {
    const initialState = JSON.parse(localStorage.getItem("scores")) || [
        {
            typeGame: "easy",
            score: 0,
            correctWord:0
        },
        {
            typeGame: "normal",
            score: 0,
            correctWord:0
        },
        {
            typeGame: "hard",
            score: 0,
            correctWord:0
        },
        {
            typeGame: "extreme",
            score: 0,
            correctWord:0
        },
    ];
    const [scores, setScores] = useState(initialState);

    useEffect(() => {
        localStorage.setItem("scores", JSON.stringify(scores));
    }, [scores]);

    return (
        <ScoreContext.Provider value={{ scores, setScores }}>
            {children}
        </ScoreContext.Provider>
    );
};

export default ScoreContext;