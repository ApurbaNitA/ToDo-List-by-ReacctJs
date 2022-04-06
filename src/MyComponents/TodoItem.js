import React from 'react'

const TodoItem = ({t, onDelete}) => {
  return (
    <div>
      <h4>{t.title}</h4>
      <p>{t.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(t)}}>Delete</button>
    </div>
  )
}

export default TodoItem
