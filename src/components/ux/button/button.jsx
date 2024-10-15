import React from "react";
import "./button.scss";
const Button = ({ text, action, color }) => {
    return <button className="buttonWrapper" btn-color={color} onClick={action}>{text}</button>;
};

export default Button;
