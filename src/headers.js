import React from "react";
import "./headers.scss";

const Models = () => {
    const emptArr = new Array(3).fill(0);
    return(
    <>
        <h6>THEME</h6>
        <div>
            <span id="themeController"></span>
           {emptArr.map((itme, index) => {return (
                <span key={index}>
                    {index+1}
                    <button value={index}></button>
                </span>
            )})}
        </div>
    </>
    );
    
}

function Headers () {
    return (
        <header>
            <h1>calc</h1>
            <Models />
        </header>
    );
}

export default Headers;