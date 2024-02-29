import React from 'react'

export default function ToDoForm() {
  return (
    <form className="todo-form">
        <input 
        type="text" 
        className="todo-form__input" 
        placeholder="Add new item"/>
        <button 
        type="submit" 
        className="todo-form__button">add</button>
    </form>
  )
}
