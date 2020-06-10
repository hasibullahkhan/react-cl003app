import React,{useState} from 'react';
export function Message (props){
  import {Message} from './Message.js'
import logo from './logo.svg';
import './App.css';
 
export default function App() {
  let [count,SetCount]=useState(1);
  return (
     <div>
       <Message Counter={count}/>
       <br />
     <h3>Value of counter variable is : {count} </h3>
     <br/>
     <button onClick={
       /* ()=> alert('Button Pressed') */
       ()  => SetCount(++count)
        }>
         Update Counter
        </button> 
      </div>
  ); 

}

