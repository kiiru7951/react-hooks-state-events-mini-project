import React from "react";

function CategoryFilter({categories, tasks, onSelectingCategory, activeCategory}) {
  
  console.log(tasks)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {
        categories.map( (category, index) => 
          {const btnClassName = category === activeCategory ? "selected" : null
          return (
          <button
          key={index}
          className={btnClassName}
          onClick={()=> {
            onSelectingCategory(category)   
          }}
          >
            {category}
          
          </button>)
      })
      }
    </div>
  );
}

export default CategoryFilter;