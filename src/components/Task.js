import React from "react";

function Task({category, index , text, handleDeleteTask}) {
  console.log(index)

  return (
    <div className="task" key={index}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>handleDeleteTask(index)} className="delete">X</button>
    </div>
  );
}

export default Task;