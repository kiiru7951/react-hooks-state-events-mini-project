import React from "react";
import Task from "./Task"

function TaskList({tasks, setTasks}) {

  function handleDeleteTask( index) {
    const taskIndex = index
    const newArray = tasks.filter((task, index) => index !== taskIndex )
    setTasks(newArray)
  }
  return (
    <div className="tasks">
      {
        tasks.map( (task, index) => ( <Task handleDeleteTask={handleDeleteTask} key={index} index={index} category={task.category} text={task.text} />))
      }
    </div>
  );
}

export default TaskList;