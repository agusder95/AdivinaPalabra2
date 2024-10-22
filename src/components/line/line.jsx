import React, { useContext, useEffect } from "react";
import "./line.scss";
import MainContext from "../../context/mainContext";
const Line = ({ row, maxRows }) => {
    const { state, setState } = useContext(MainContext);
    const COLUMS = state.word.length;
    const initialColors = state.colorBoard.length;

    const handleChangueInput = (j) => {
        if (state.board.length - 1 >= row) {
            if (state.board[row][j] === undefined) {
                return "";
            } else {
                return state.board[row][j];
            }
        }
    };

    const evaluateWord = (boardLength) => {
        if (row >= state.colorBoard.length) {
            let word = state.word.split("");
            let board =
                boardLength === maxRows
                    ? state.board[maxRows - 1]
                    : state.board[row - 1];
            let evaluation = [];
            console.log(
                "boardLength",
                boardLength,
                "maxRows",
                maxRows,
                "row",
                row - 1
            );
            word.forEach((letter, index) => {
                if (letter === board[index]) {
                    evaluation.push("T");
                } else if (word.includes(board[index])) {
                    evaluation.push("R");
                } else {
                    evaluation.push("F");
                }
            });
            setState((prevState) => ({
                ...prevState,
                colorBoard: [...prevState.colorBoard, evaluation],
            }));
        }
    };

    useEffect(() => {
        let boardLength = state.board.length - 1;

        if (
            boardLength > 0 &&
            (row === boardLength || boardLength === maxRows)
        ) {
            evaluateWord(boardLength);
        }
    }, [state.board.length]);
    return (
        <div className="lineWrapper">
            {[...Array(COLUMS)].map((_, index) => {
                const colorValue =
                    initialColors > row ? state.colorBoard[row]?.[index] : "";
                return (
                    <div
                        key={index}
                        className="letterContainer"
                        color-board={colorValue}
                    >
                        <p>{handleChangueInput(index)}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Line;
