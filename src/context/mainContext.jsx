import { useEffect, useState } from "react";
import { createContext } from "react";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const initialState = JSON.parse(localStorage.getItem("gameState")) || {
        typeGame: "",
        word: "",
        score: null,
        correctWords: null,
        board: [],
        usrInput: [],
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        localStorage.setItem("gameState", JSON.stringify(state));
    }, [state]);

    return (
        <MainContext.Provider value={{ state, setState }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainContext;