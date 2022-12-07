import React, { useContext } from "react";
import "./headers.scss";
import { UseToggel } from "./themeContextWrapper";

const Models = () => {
    const emptArr = new Array(3).fill(0);
    const updatedTheme = UseToggel();

    /*need to recheck */
    /*const isHidden = (e) => {
        const isHidden = theme !== e.target.value ? "0" : "1";
        e.target.style.opacity = isHidden;
    }*/

    return(
    <>
        <h6>THEME</h6>
        <div>
            {emptArr.map((itme, index) => {return (
                <span key={index} >
                    {index+1}
                    <button value={index+1} onClick={updatedTheme}></button>
                </span>
            )})}
            <span id="themeController"></span>
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