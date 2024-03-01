import React, { Children } from 'react'

export default function ToDoWrapper({ children }) {
  return (
    <div className="todo-wrapper">
        { children }
    </div>
  )
}
