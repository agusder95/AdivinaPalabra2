import React, { useContext, useEffect } from "react";
import "./normal.scss";
import useApi from "../../state/hooks/useApi";
import { API_URL } from "../../state/constants/apiUrl";
import MainContext from "../../context/mainContext";

const NormalMode = () => {
    const LENGTH = 6;
    const { data, loading, error } = useApi(API_URL, LENGTH);
    const { setState } = useContext(MainContext);

    useEffect(() => {
        if (data) {
            setState((prevState) => ({
                ...prevState,
                typeGame: "normal",
                word: data,
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
            <p>
                The word is: {data} with {LENGTH} letters
            </p>
        </div>
    );
};

export default NormalMode;
