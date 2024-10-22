import React, { useContext, useEffect } from "react";
import "./normal.scss";
import useApi from "../../state/hooks/useApi";
import { API_URL } from "../../state/constants/apiUrl";
import MainContext from "../../context/mainContext";
import Keyboard from "../../components/keyboard/keyboard";
import Board from "../../components/board/board";

const NormalMode = () => {
    const LENGTH = 5;
    const maxRow = 5;
    const { data, loading, error } = useApi(API_URL, LENGTH);
    const { setState } = useContext(MainContext);

    useEffect(() => {
        if (data) {
            let wordUpperCase = data.toUpperCase();
            setState((prevState) => ({
                ...prevState,
                typeGame: "normal",
                word: wordUpperCase,
                score: 0,
                correctWords: 0,
            }));
        }
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <p>Error {error.message}</p>;

    return (
        <div className="normalWrapper">
            <h1>Normal Mode</h1>
            <Board rows={maxRow}/>
            <Keyboard rows={maxRow}/>
        </div>
    );
};

export default NormalMode;
