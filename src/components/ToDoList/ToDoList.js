import React from 'react'
import { useState, useContext } from 'react'
import Button from '../Button/Button'
import ToDoItemContext from '../../context/ToDoItemContext.js'

import './ToDoList.style.css'

export default function ToDoList() {
    const items = useContext(ToDoItemContext).toDoList;

    return (

        <div className="todo-list__wrapper">
            {items.length === 0 && <h2 className="todo-paragraph--empty">No items!</h2>}
            {
                items.length !== 0 &&
                <>
                    <div className="todo-list__stats">
                        <p>
                            <span>Completed: </span>
                            {items.filter(item => item.completed).length}
                        </p>
                        <p>
                            <span>Open: </span>
                            {items.filter(item => !item.completed).length}
                        </p>
                    </div>
                    <ul className="todo-list">
                        {
                            items.map(item =>
                                <ToDoTask key={item.id} item={item} />
                            )
                        }
                    </ul>
                </>
            }
        </div>
    )
}

function ToDoTask({ item }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editingValue, setEditingValue] = useState("")

    const toggleToDoItem = useContext(ToDoItemContext).toggleToDoItem;
    const removeToDoItem = useContext(ToDoItemContext).removeToDoItem;
    const updateToDoItem = useContext(ToDoItemContext).updateToDoItem;

    function handleEditClick(id) {
        setIsEditing(!isEditing);
        updateToDoItem(item.id, editingValue)
        setEditingValue(item.title)
    }

    return (
        <li className="todo-item">

            <label>
                <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={event => toggleToDoItem(item.id, event.target.checked)}
                />
                {isEditing && <input type="text" value={editingValue} onChange={(event) => setEditingValue(event.target.value)} />}
                {!isEditing && item.title}
            </label>
            <div className="todo-item__setting">
                <Button
                    type="button"
                    class="todo__button todo__button--delete"
                    label="delete"
                    onClick={() => removeToDoItem(item.id)}
                />
                {isEditing &&
                    <Button
                        type="button"
                        class="todo__button todo__button--submit"
                        label="save"
                        onClick={() => handleEditClick(item.id)}
                    />
                }
                {!isEditing &&
                    <Button
                        type="button"
                        class="todo__button todo__button--edit"
                        label="edit"
                        onClick={() => handleEditClick(item.id)}
                    />
                }
            </div>
        </li>
    )
}