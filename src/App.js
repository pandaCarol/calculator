import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Headers from './headers';
import Outputs from './outputs';
import InputButtons from './inputs';



function App() {
  const [inputNum, setinputnum] = useState(0);
  const [operation, setOperation] = useState("+")
  const [result, setResult] = useState(0);

  return (
    <div className="App">
      <Headers />
      <Outputs result={result} inputNum={inputNum}/>
      <InputButtons onChange/>
    </div>
  );










  
}

export default App;
