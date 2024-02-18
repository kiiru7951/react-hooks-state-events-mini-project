import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]);


  function handleFormSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category, id: uuidv4() });
    setText("");
    setCategory(categories[1])
  }
  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(event)=> setText(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(event)=> setCategory(event.target.value)}>
          {/* render <option> elements for each category here */}
          {categories.filter(category => category !== "All").map( (category, index) => (
          <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;