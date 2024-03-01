import { React, useState } from 'react'

export default function ToDoForm( props) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        if (newItem === "") 
            return
        props.onSubmit(newItem);
        setNewItem("");
    };

    function handleInputChange(event) {
        setNewItem(event.target.value)
    };

    return (
        <>
            <form className="todo-form" onSubmit={ handleSubmit }>
                <label htmlFor="item">New item</label>
                <input
                    type="text"
                    id="item"
                    className="todo-form__input" 
                    value={newItem}
                    onChange={event => handleInputChange(event)}
                    placeholder="Add new item"/>
                <button 
                    type="submit" 
                    className="todo-form__button">add</button>
            </form>
        </>
    )
}
