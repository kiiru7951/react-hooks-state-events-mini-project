import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const onTaskFormSubmit = (newTask) => {setTasks([...tasks, newTask])};
  const selecteCategories = tasks.filter( task => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter setTasks={setTasks} tasks={tasks} categories={CATEGORIES} activeCategory={category} onSelectingCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={selecteCategories} setTasks={setTasks}/>
    </div>
  );
}

export default App;