import React, { useContext, useState } from "react";
import "./keyboard.scss";
import MainContext from "../../context/mainContext";
const Keyboard = () => {
    const { state, setState } = useContext(MainContext);
    const keys = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "<-"],
    ];

    const handleInput = (e) => {
        const key = e.target.innerText;
        if (key === "<-") {
            const currentRow = state.board[state.board.length - 1] || [];
            setState((prevState) => ({
                ...prevState,
                board: [...prevState.board.slice(0, -1), currentRow.slice(0, -1)],
            }));
            return;
        }
        const currentRow = state.board[state.board.length - 1] || [];
        setState((prevState) => ({
            ...prevState,
            board: [...prevState.board.slice(0, -1), [...currentRow, key]],
        }));
    };

    const handleEnter = (e) => {
        setState((prevState) => ({
            ...prevState,
            board: [...prevState.board, []],
        }));
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
