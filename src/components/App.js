import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";
import Count from "./Count";
import Skill from "./Skill";

const App = () => {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [skills, setSkills] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = ()=>{
    setTodos([...todos,"New Todo"]);
  }
  const addSkills = ()=>{
    setSkills([...skills,inputValue]);
    setInputValue("");
  }

  return (
    <div>
        <Todo todos={todos} addTodo={addTodo}  />
        <div className="underline"></div>
        <Count count={count} setCount={setCount}/>
        <div className="underline"></div>
        <Skill skills={skills} addSkills={addSkills} inputValue={inputValue} setInputValue={setInputValue}/>
        <div className="underline"></div>
    </div>
  )
}

export default App;


