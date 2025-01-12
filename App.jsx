import { useState } from 'react'
import './style/App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setListTodo]=useState([])
  const addList = (inputText)=>{
    if(inputText!==''){
    setListTodo([...todoList, inputText])}
  }
  const deleteList=(key)=>{
    let newList = [...todoList]
    newList.splice(key,1)
    setListTodo([...newList])
  }
  return (
    <div className='main-container'>
    <TodoInput addList={addList}/>
    <h2 className='heading'>Your Todos</h2>
    {todoList.map((listItem,i)=>{return(<TodoList key={i} index={i} item={listItem} deleteItem={deleteList}/>)})}
    
    </div>
  )
}

export default App
