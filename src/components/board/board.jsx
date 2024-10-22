import React, { useContext } from "react";
import "./board.scss";
import MainContext from "../../context/mainContext";
import Line from "../line/line";
const Board = ({rows}) => {
    
    const { state, setState } = useContext(MainContext);
    
    
    return (
        <div className="boardWrapper">
            {[...Array(rows)].map((_, index) => (
                <Line key={index} row={index} maxRows={rows}/>
            ))}
        </div>
    );
};

export default Board;
