import React from 'react'

export default function ToDoForm() {

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="todo-form" onSubmit={ handleSubmit }>
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
