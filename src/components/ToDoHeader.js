import React from 'react'

export default function ToDoHeader({ header }) {
  return (
    <div className="todo-header">
        <h1 className="todo-header__title">{ header }</h1>
    </div>
  )
}
