import { React, useState } from 'react'

import './ToDoForm.style.css'

export default function ToDoForm(props) {
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
        <div className="todo-form__wrapper">
            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="item"
                    className="todo-form__input"
                    value={newItem}
                    onChange={handleInputChange}
                    placeholder="What would you like to do?" />
                <button
                    type="submit"
                    className="todo-form__button">add</button>
            </form>
        </div>
    )
}
