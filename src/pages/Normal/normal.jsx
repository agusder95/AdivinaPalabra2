import React, { useContext, useEffect, useState } from "react";
import "./normal.scss";
import useApi from "../../state/hooks/useApi";
import { API_URL } from "../../state/constants/apiUrl";
import MainContext from "../../context/mainContext";
import Keyboard from "../../components/keyboard/keyboard";
import Board from "../../components/board/board";
import { useNavigate } from "react-router-dom";
import ScoreContext from "../../context/scoreContext";

const NormalMode = () => {
    const LENGTH = 5;
    const maxRow = 5;
    const [resolved, setResolved] = useState(false);
    const { data, loading, error } = useApi(API_URL, LENGTH);
    const { state, setState } = useContext(MainContext);
    const { scores, setScores } = useContext(ScoreContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (state.colorBoard.length === 0) {
            if (data) {
                let wordUpperCase = data.toUpperCase();
                setState((prevState) => ({
                    ...prevState,
                    typeGame: "normal",
                    word: wordUpperCase,
                }));
            }
        }
    }, [data]);

    useEffect(() => {
        if (state.guessed) {
            setResolved(true);
            const updateScore = scores.map((item) => {
                if (item.typeGame === "normal") {
                    return {
                        ...item,
                        score: item.score + 10,
                        correctWord: item.correctWord + 1,
                    };
                }
                return item;
            });
            setScores(updateScore);
        } else {
            setResolved(false);
        }
    }, [state.guessed]);

    if (loading) return <div>Loading...</div>;
    if (error) return <p>Error {error.message}</p>;

    const handleOther = () => {
        setState((prevState) => ({
            ...prevState,
            typeGame: "",
            word: "",
            guessed: false,
            guessedRow: 0,
            board: [[]],
            colorBoard: [],
        }));

        navigate(0);
    };

    const handleHome = () => {
        setState((prevState) => ({
            ...prevState,
            typeGame: "",
            word: "",
            guessed: false,
            guessedRow: 0,
            score: prevState.score + 10,
            correctWords: prevState.correctWords + 1,
            board: [[]],
            colorBoard: [],
        }));
        navigate("/");
    };

    return (
        <div className="normalWrapper">
            <h1>Normal Mode</h1>
            <Board rows={maxRow} />
            <Keyboard rows={maxRow} />
            {resolved && (
                <div className="correctWordWrapper">
                    <div className="correctWordContainer">
                        <h1>Correct!</h1>
                        <p>Palabra correcta: {state.word}</p>
                        <div className="buttonsCorrectWord">
                            <button onClick={handleOther}>Otra</button>
                            <button onClick={handleHome}>Home</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NormalMode;

/* useEffect(() => {
    state.colorBoard.length > 0 && validateWord(state.colorBoard[state.colorBoard.length - 1]) ?
        setResolved(true) :
        setResolved(false);
}, [state.colorBoard]); */
