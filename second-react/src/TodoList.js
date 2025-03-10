import React, { useState } from "react";

export default function TodoList() {
  const [inp, setInp] = useState("");
  const [add, setTask] = useState([]);

  function handleClick() {
    setTask([...add, inp]);
    setInp("")
                          
  }
  function handle(e){
    setInp(e.target.value);
    

  }
  function deleteTask(indexToDelete){
    setTask(add.filter((element,index)=>index!==indexToDelete))
  }
  return (
    <div>
      <label>To do:</label>
      <input
        className="todo"
        value={inp}
        onChange={handle}
      />
      <button className="todo-btn" onClick={handleClick}>
        Add
      </button>
      <ul className="list"  style={{listStyle:"none" }}>
        {add.map((ele, index) => (
          <li key={index}>{ele}<button onClick={()=>deleteTask(index)}>x</button></li>
        ))}
      </ul>
    </div>
  );
}
