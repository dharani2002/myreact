import { useState } from "react";
import Card from "./components/card";




function App() {

  let [counter,setCounter]= useState(15)

  let myObj={
    zodiac:"tauros",
    symbol:"bull",
    month: 2
  }

  let arr=[1,2,3]

const addValue = () =>{
  //console.log("added:", counter)
  //counter=counter+1
  if(counter<20) setCounter(counter+1)
  else{
  alert("counter value cant abe above 20")
}
}

const removeValue = () =>{
  if(counter>0) setCounter(counter-1)
  else {
  alert("counter value cant be negative")
  }
}

  return (
    <>
    <h1 className="font-sans m-3 text-3xl">press the button</h1>
    <p className="m-4 text-slate-700"> value of counter is: {counter} </p>
    <p className="m-4 text-slate-700"> the value of counter really is: {counter}</p>
    <p className="m-4 text-slate-700"> the value of counter really really is: {counter} </p>

    <button onClick={addValue} className="border-solid bg-sky-500 rounded-xl m-4 w-36 h-8" >Add counter</button>
    <br/>
    <button onClick={removeValue} className="border-solid bg-sky-500 rounded-xl m-4 w-36 h-8">remove counter</button>

    <Card username="aries" someObj={myObj} someArr={arr} />
    <Card/>

    
    </>
    

  )
}

export default App
