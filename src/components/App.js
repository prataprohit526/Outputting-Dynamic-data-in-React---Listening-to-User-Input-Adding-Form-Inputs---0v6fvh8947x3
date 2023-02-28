import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
const [value, setValue]=useState();
const [data, setData]=useState("______");
   function changeValue(e){
    setValue(e.target.value);
   }
   function clickMe(){
setData(value);
   }
  return (
    <div id="main">
      <input id='input' onChange={changeValue}></input>
      <button id='button' onClick={clickMe}>Click</button>
      <p id='text'> Hello my name is {data} and I study at Newton School</p>
    </div>
  )
}


export default App;
