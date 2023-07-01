import { useState } from 'react';
import './style.css'


export default function App() {

  const [newItem, setNewItem] = useState('')
  const [todo, setTodo] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodo((currentTodo)=>{
      return [
        ...currentTodo,
         { id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
  }

  console.log(todo)
  return (
  <div>
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input value={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id='item' />
      </div>
      <button className='btn'>Add</button>
    </form>
    <h1 className='header'>Todo list</h1>
    <ul className="list">
      <li>
        <label htmlFor="">
          <input type="checkbox" />
          Item1
        </label>
        <button className="btn btn-danger">Delete </button>
      </li>
      <li>
        <label htmlFor="">
          <input type="checkbox" />
          Item1
        </label>
        <button className="btn btn-danger">Delete </button>
      </li>
    </ul>
  </div>
  );
}