import React from 'react'

export default function ToDoList({ items }) {

  const listItems = items.map(item =>
    <li key={ item.id } className="todo-list__item">
      <label>
        <input 
          type="checkbox" 
          disabled={ item.completed }
        />
        { item.title }
      </label>
    </li>
  );
  
  return (
    <>
      {/* Add code if items list is empty - items.height === 0 */}
      <ul className="todo-list">{ listItems }</ul>
    </>
  )
}
