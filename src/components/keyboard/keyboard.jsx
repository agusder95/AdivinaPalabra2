import React, { useContext, useState } from "react";
import "./keyboard.scss";
import MainContext from "../../context/mainContext";

const Keyboard = ({ rows }) => {
    const { state, setState } = useContext(MainContext);
    const [colorKey, setColorKey] = useState({});
    const [counterRows, setCounterRows] = useState(0);
    const keys = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "<-"],
    ];

    const solution = state.word;

    const handleInput = (e) => {
        if (counterRows >= rows) {
            return;
        }
        const key = e.target.innerText;
        if (key === "<-") {
            const currentRow = state.board[state.board.length - 1] || [];
            setState((prevState) => ({
                ...prevState,
                board: [
                    ...prevState.board.slice(0, -1),
                    currentRow.slice(0, -1),
                ],
            }));
            return;
        }
        const currentRow = state.board[state.board.length - 1] || [];
        if (solution.length > currentRow.length) {
            setState((prevState) => ({
                ...prevState,
                board: [...prevState.board.slice(0, -1), [...currentRow, key]],
            }));
        }
    };

    const updateKeyColors = () => {
        const currentRowIndex = counterRows;
        const currentRow = state.board[currentRowIndex] || [];

        currentRow.forEach((key, index) => {
            const isCorrect = key === solution[index];
            const isInWord = solution.includes(key);

            setColorKey((prevColorKey) => ({
                ...prevColorKey,
                [key]: isCorrect ? "T" : isInWord ? "R" : "F",
            }));
        });
    };

    const handleEnter = () => {
        const currentRow = state.board[counterRows];
        if (currentRow.length === solution.length) {
            setCounterRows(counterRows + 1);

            if (counterRows >= rows) {
                return;
            }

            updateKeyColors();
            setState((prevState) => ({
                ...prevState,
                board: [...prevState.board, []],
            }));
        }
    };

    return (
        <div className="keyboardWrapper">
            {keys.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboardRow">
                    {row.map((key) => (
                        <button
                            key={key}
                            className="keyboardKey"
                            onClick={
                                key === "Enter" ? handleEnter : handleInput
                            }
                            color-key={colorKey[key]}
                        >
                            {key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;
