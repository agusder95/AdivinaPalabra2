import React, { useContext } from "react";
import "./home.scss";
import Button from "../../components/ux/button/button";
import CardStats from "../../components/ux/cardStats/cardStats";
import { useNavigate } from "react-router-dom";
import ScoreContext from "../../context/scoreContext";
const Home = () => {
    const {scores, setScores} = useContext(ScoreContext);
    const navigate = useNavigate();

    const handleClick = (title) => {
        const resetScore = scores.map(item=>{
            if(item.typeGame === title){
                return {
                    ...item,
                    score: 0,
                    correctWord:0
                }
            }
            return item;
        })
        setScores(resetScore);
        /* scores.map(item=>{
            if(item.typeGame === title){
                setScores(prevState=>({
                    ...prevState,
                    score: 0,
                    correctWord:0
                }))
            }
        }) */
        navigate(`/${title}`);
    }

    return (
        <div className="homeWrapper">
            <h1>Adivina Palabra</h1>
            <div className="statsHomecontainer">
                <h2>Estadisticas</h2>
                <div className="cardStatsContainer">
                    <CardStats category="Normal" record="9" score="150" />
                    <CardStats category="Dificil" record="7" score="100" />
                    <CardStats category="Facil" record="10" score="200" />
                    <CardStats category="Normal2" record="2" score="60" />
                </div>
            </div>

            <div className="btnHomeContainer">
                <Button text="Normal" action={() => handleClick('normal') } color="blue" />
                <Button text="Jugar2" action={() => handleClick('easy') } color="red" />
                <Button text="Jugar3" action={() => handleClick('hard') } color="green" />
                <Button text="Jugar4" action={() => handleClick('extreme') } color="yellow" />
            </div>
        </div>
    );
};

export default Home;
