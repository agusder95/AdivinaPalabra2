import React from "react";
import "./home.scss";
import Button from "../../components/ux/button/button";
import CardStats from "../../components/ux/cardStats/cardStats";
import { useNavigate } from "react-router-dom";
const Home = () => {

    const navigate = useNavigate();

    const handleClick = (title) => {
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
                <Button text="Normal" action={() => handleClick('normalMode') } color="blue" />
                <Button text="Jugar2" action={() => handleClick('Normal2') } color="red" />
                <Button text="Jugar3" action={() => handleClick('Normal3') } color="green" />
                <Button text="Jugar4" action={() => handleClick('Normal4') } color="yellow" />
            </div>
        </div>
    );
};

export default Home;
