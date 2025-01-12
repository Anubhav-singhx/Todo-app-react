import React, { useState } from 'react'
import "../style/Todoinput.css"
const TodoInput = (props) => {
    const [inputText, setInputText]=useState("");

    const enterKeyPress=(e)=>{
        if(e.keyCode===13){
        props.addList(inputText)
        setInputText("")
        }

    }
  return (
    <div>
    <input type="text" placeholder='Enter Your Todo' value={inputText}  onChange={e=>{setInputText(e.target.value)}} className='todo-input' onKeyDown={enterKeyPress} />
    <button className='ass-btn' onClick={()=>{props.addList(inputText); setInputText("")}}>+</button>
      
    </div>
  )
}




export default TodoInput
