import React from "react";

const Outputs = (obj) => {
    return (
        <div id="output">
            <div>{obj.inputNum}</div>
            <div>{obj.result}</div>
        </div>
    )
}

export default Outputs;