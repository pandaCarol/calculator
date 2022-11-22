import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Headers from './headers';
import Outputs from './outputs';
import InputButtons from './inputs';

function operation (result, outputs) {

  let previousPow, currentPow, calculater;
  const previous = outputs.slice(0, outputs.length-1);
  const current = result;
  //
  try{previousPow = previous.split(".")[1].length} catch(e){previousPow = 0};
  try{currentPow = currentPow.split(".")[1].length} catch(e) {currentPow = 0};
  const previousReplaceDot = Number(previous.replace(".", ""));
  const currentReplaceDot = Number(current.replace(".", ""));

  const operations = outputs.slice(outputs.length-1);

  switch (operations) {
    case "+":
      return calculater = Number(previous) + Number(current);
    case "-":
      return calculater = Number(previous) - Number(current);
    case "x":
      return calculater = (previousReplaceDot * currentReplaceDot) / Math.pow(10, previousPow + currentPow);
    case "/": 
      return calculater = current !== "0" ? previousReplaceDot / currentReplaceDot * Math.pow(10, currentPow - previousPow) : "Error!";
    default:
      break;
  }
}

function App() {
  const [outputs, setOutputs] = useState("");
  const [inputs, setInputs] = useState("");
  const [result, setResult] = useState("0");
  
  const handelClick = (e) => {
    const cur = e.target.value.toString();
    const curClass = e.target.className;

    // result is a string, input value "cur" has been updated to string
    // input a number -> update the "result" value
    if (curClass === "num") {
      if (inputs.className === "symbol") {
        setResult(cur);
      } else if(inputs.className === "equal"){
        setOutputs("");
        setResult(cur);
      } else{
        if (result.startsWith("0") && result.indexOf(".") === -1) {
          setResult(cur);
        } else {
          setResult(result + cur);
        }
      }
      
    }
    //input a dot
    if (curClass === "dot") {
      if (result.indexOf(".") === -1) {
        setResult(result + cur);
      }
    }

    if (curClass === "reset") {
      setOutputs("");
      setResult("0");
      setInputs("");
    }

    if (curClass === "del") {
      if (inputs.className === "num") {
        let afterDel;
        try{afterDel = result.slice(0,result.length-1)} catch(e){afterDel = "0"};
        setResult(afterDel);
      }
      if (inputs.className === "equal") {
        setOutputs("");
      }
    }

    if (curClass === "symbol") {
      if (outputs === "" || inputs.className === "symbol" || outputs.indexOf("=") !== -1) {
        setOutputs(result + cur);
      }else{
        const calResult = operation(result, outputs);
        setOutputs(calResult + cur);
        setResult(calResult);
      }
    }

    if (curClass === "equal") {
      if(inputs.value !== "=") {
        setOutputs(outputs + result + "=");
        setResult(operation(result, outputs));
      }else {
        let slicePosi;
        try {slicePosi = Math.max(outputs.indexOf("+"), outputs.indexOf("-"), outputs.indexOf("x"), outputs.indexOf("/"))} catch(e) {};
        const iteralOutputs = result + outputs.slice(slicePosi, slicePosi+1);
        const iteralResult = outputs.slice(slicePosi+1, outputs.length-1);
        setOutputs(iteralOutputs + iteralResult + "=");
        setResult(operation(iteralResult, iteralOutputs));
      }
    }

    setInputs(e.target);
  }

  return (
    <div className="App">
      <Headers />
      <Outputs result={result} inputNum={outputs}/>
      <InputButtons onClick={(e) => handelClick(e)} />
    </div>
  );

}


export default App;
