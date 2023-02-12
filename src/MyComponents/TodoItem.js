import React from 'react'

export default function TodoItem({todo,onDelete}) {
  return (
    <>
    <div>
   <h4 className='sm-text' >
    {todo.title}</h4>
   <p> {todo.desc}</p>
   <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}> Delete </button>
   
    </div>
    <hr/>
    </>
  )
}
