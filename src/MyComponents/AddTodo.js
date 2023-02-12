import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

   const submit=(e)=>{
   e.preventDefault();
   if(!title || !desc)
   {
    alert("Title or Desc can not be blank");
   }
   else{
   props.addTodo(title,desc);
   setTitle("");
   setDesc("");
   }
}
  return (
    <div className='container my-3'>
        <h3>
            Add Your TodoItem
        </h3>
   <form onSubmit={submit }>
  <div className="mb-3">
    <label for="title" className="form-label">Todo Item </label>
    <input type="text" value={ title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="text"/>
    </div>
    <div className="mb-3">
    <label for="desc" className="form-label">Desc</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc"/>
  </div>
 <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
  </div>
  )
}

export default AddTodo
