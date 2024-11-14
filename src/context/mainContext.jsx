import { useEffect, useState, createContext } from "react";


const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const initialState = JSON.parse(localStorage.getItem("gameState")) || {
        typeGame: "",
        word: "",
        guessed: false,
        guessedRow: 0,
        board: [[]],
        colorBoard: [],
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