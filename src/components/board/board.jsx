import React, { useContext } from "react";
import "./board.scss";
import MainContext from "../../context/mainContext";
import Line from "../line/line";
const Board = () => {
    const ROWS = 5; // Number of lines
    const { state, setState } = useContext(MainContext);
    
    
    return (
        <div className="boardWrapper">
            {[...Array(ROWS)].map((_, index) => (
                <Line key={index} row={index}/>
            ))}
        </div>
    );
};

export default Board;
