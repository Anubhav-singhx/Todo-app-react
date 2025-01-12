import React from 'react'
import "../style/TodoList.css"
const TodoList = (props) => {
  return (
    <div className='list-item'>
      {props.item}
      <div className="icons">
       <button className='dlt-btn' onClick={e=>{props.deleteItem(props.index)}}>⛔</button>
      </div>
    </div>
  )
}

export default TodoList
