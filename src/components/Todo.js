import React from "react";

const Todo = ({todos,addTodo})=>{
    return (
        <div>
            <h1>To-Do List</h1>
            <ul type="none">
              {
                todos.map((todo,index)=>{
                  return(
                    <li key={index}>
                    {todo}
                    </li>
                  ) 
                })
              }
            </ul>
            <button onClick={addTodo}>Add Todo</button> 
        </div>
    )
}
export default Todo;