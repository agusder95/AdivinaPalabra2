import React, { useContext } from "react";
import "./line.scss";
import MainContext from "../../context/mainContext";
const Line = ({ row }) => {
    const { state, setState } = useContext(MainContext);
    const COLUMS = state.word.length;

    const handleChangueInput = (j) => {
        if (state.board.length - 1 >= row) {
            if (state.board[row][j] === undefined) {
                return "";
            } else {
                return state.board[row][j];
            }
        }
    };

    return (
        <div className="lineWrapper">
            {[...Array(COLUMS)].map((_, index) => (
                <div key={index} className="letterContainer">
                    <p>{handleChangueInput(index)}</p>
                </div>
            ))}
        </div>
    );
};

export default Line;
