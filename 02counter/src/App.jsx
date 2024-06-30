import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter]= useState(15)
  //let counter = 15

  const addValue =  () => {

    
    setCounter((preCounter) => preCounter + 1)
    setCounter((preCounter) => preCounter + 1)
    setCounter((preCounter) => preCounter + 1)
    setCounter((preCounter) => preCounter + 1)
  }
  

  const removeValue = () => {

    setCounter((preCounter) => preCounter - 1)
    setCounter((preCounter) => preCounter - 1)
    setCounter((preCounter) => preCounter - 1)
    setCounter((preCounter) => preCounter - 1)
  }

  return (
    <>
      <h>React Course {counter}</h>
      <h2>Counter Value:{counter} </h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <button
      onClick={removeValue}
    >Remove Value</button>{" "}
      <p>footer:{counter}</p>
      
    </>
  )
}

export default App
