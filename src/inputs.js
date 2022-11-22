import React from "react";

function mapButtons(arr) {
    const defInputType = (item) => {
        switch (item) {
            case "DEL":
                return "del";
            case ".": 
                return "dot";
            case 0:
                return "num";
            case "Reset":
                return "reset";
            case "=":
                return "equal";
            default:
                return "symbol";
        }
    }

    return(
        arr.map((item) => {
            return(<button key={item} value={item} className={defInputType(item)}>{item}</button>)
        })
    )
  }

const NumButton = (obj) => {
    const emptArr = new Array(9).fill(0);
    return(
        <div >
            {emptArr.map((item, index) => {
                return(<button key={index+1} value={index+1} className="num">{index+1}</button>)
            })}
        </div>
    )
}

const DotZeroSlash = () => {
    const dzs = [".", 0, "/"];
    return mapButtons(dzs)
}

const DelAddSubMulti = () => {
    const addSubMulti = ["DEL", "+", "-", "x"];
    return mapButtons(addSubMulti);
}

const ResetEqual = () => {
    const resetEqual = ["Reset", "="];
    return mapButtons(resetEqual);
}

function InputButtons(obj) {
    return (
        <div id="input" onClick={(e) => obj.onClick(e)}>
            <NumButton />
            <DotZeroSlash />
            <DelAddSubMulti />
            <ResetEqual />
        </div>
    )
}

export default InputButtons;