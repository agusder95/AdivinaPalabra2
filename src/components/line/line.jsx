import React, { useContext } from "react";
import "./line.scss";
import MainContext from "../../context/mainContext";
const Line = ({line}) => {
    const { state, setState } = useContext(MainContext);
    const COLUMS = state.word.length;
    
    /* console.log(state.usrInput); */

    return (
        <div className="lineWrapper">
            {[...Array(COLUMS)].map((_, index) => (
                    <div key={index} className="letterContainer">
                        <p>{line === state.board.length && state.usrInput[index] ? state.usrInput[index] : ''}</p>
                        {/* <p>{`${line} - ${index}`}</p> */}
                    </div>
                ))
            }
        </div>
    );
};

export default Line;
/* {[
                ...Array.from({ length: state.word.length }).map((_, index) => (
                    <div key={index} className="letterContainer">
                        <p>{usrWord}</p>
                    </div>
                )),
            ]} */
