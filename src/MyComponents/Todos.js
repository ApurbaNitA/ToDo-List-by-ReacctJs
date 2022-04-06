import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length===0?"Add your todo list":
      
        props.todos.map((t)=>{
          return <TodoItem t={t} key={t.sno} onDelete={props.onDelete}/>
        })

      }
      
    </div>
  )
}

export default Todos
