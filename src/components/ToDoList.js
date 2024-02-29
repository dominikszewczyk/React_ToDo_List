import React from 'react'

export default function ToDoList({ items }) {

  const listItems = items.map(item =>
    <li className="todo-list__item">{ item.task }</li>
  );
  
  return (
    <ul className="todo-list">{ listItems }</ul>
  )
}
