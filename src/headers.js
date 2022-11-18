import React from "react";

const Models = () => {
    const emptArr = new Array(3).fill(0);
    return(
    <>
        <h2>THEME</h2>
        <div>
           {emptArr.map((itme, index) => {return (
                <span key={index}>
                    {index}
                    <button value={index}>{index}</button>
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