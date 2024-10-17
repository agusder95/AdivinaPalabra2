import React, { useContext } from "react";
import "./board.scss";
import MainContext from "../../context/mainContext";
import Line from "../line/line";
const Board = () => {
    const ROWS = 5;
    const { state, setState } = useContext(MainContext);
    /* const renderEmptyDivs = () => {
        return Array.from({ length: state.word.length }).map((_, index) => (
            <div key={index} className='emptyDiv'></div>
        ));
    }; */
    return (
        <div className="boardWrapper">
            {[...Array(ROWS)].map((_, index) => (
                <Line key={index} line={index}/>
            ))}
        </div>
    );
};

export default Board;
