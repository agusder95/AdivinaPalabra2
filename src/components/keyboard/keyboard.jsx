import React, { useContext, useEffect, useState } from "react";
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

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key.toUpperCase();
            if (key === "ENTER") {
                handleEnter();
            } else if (key === "BACKSPACE") {
                handleInput("<-");
            } else if (/^[A-ZÑ]$/.test(key)) {
                handleInput(key);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [counterRows, state.board]);

    const handleInput = (key) => {
        if (counterRows >= rows) return;

        const currentRow = state.board[state.board.length - 1] || [];

        if (key === "<-") {
            setState((prevState) => ({
                ...prevState,
                board: [
                    ...prevState.board.slice(0, -1),
                    currentRow.slice(0, -1),
                ],
            }));
        } else if (
            solution.length > currentRow.length ||
            currentRow.length === 0
        ) {
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
    
    const validateWord = () => {
        const currentRow = state.board[counterRows];
        const isCorrect = currentRow.join("") === solution;
        const isLastRow = counterRows === rows - 1;

        if (isCorrect) {
            setState((prevState) => ({
                ...prevState,
                guessed: true,
                guessedRow: counterRows,
            }));
        }
    }

    const handleEnter = () => {
        const currentRow = state.board[counterRows];
        if (currentRow.length === solution.length) {
            updateKeyColors();
            setCounterRows((prevCounter) => prevCounter + 1);
            validateWord();
            if (counterRows < rows - 1) {
                setState((prevState) => ({
                    ...prevState,
                    board: [...prevState.board, []], // Agrega una nueva fila
                }));
            }
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
                            onClick={() =>
                                key === "Enter"
                                    ? handleEnter()
                                    : handleInput(key)
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
