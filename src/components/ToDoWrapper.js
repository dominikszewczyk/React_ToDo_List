import React from 'react'

export default function ToDoWrapper({ children }) {
  return (
    <div className="todo-wrapper">
        { children }
    </div>
  )
}
