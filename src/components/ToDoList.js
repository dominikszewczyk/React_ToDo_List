import React from 'react'

export default function ToDoList({ items }) {

  const listItems = items.map(item =>
    <li className="todo-list__item">
      <label>
        <input 
          type="checkbox" 
          disabled={ item.competed }
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
