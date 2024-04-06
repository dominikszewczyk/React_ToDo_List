import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'

import './ToDoList.style.css'

export default function ToDoList({ items, toggleToDoItem, removeToDoItem, updateToDoItem, deleteAllToDoItems }) {
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
                                <ToDoTask key={item.id} item={item} toggleToDoItem={toggleToDoItem} removeToDoItem={removeToDoItem} updateToDoItem={updateToDoItem} />
                            )
                        }
                    </ul>
                    <div class="todo-list__stats">
                        <Button
                            type="button"
                            class="todo__button todo__button--delete todo__button--big"
                            label="delete all"
                            onClick={deleteAllToDoItems}
                        />
                    </div>
                </>
            }
        </div>
    )
}

function ToDoTask({ item, toggleToDoItem, removeToDoItem, updateToDoItem }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editingValue, setEditingValue] = useState("")

    function handleEditClick(item) {
        setIsEditing(!isEditing);
        updateToDoItem({ id: item.id, title: editingValue, completed: item.completed })
        setEditingValue(item.title)
    }

    return (
        <li className="todo-item">

            <label>
                <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={event => toggleToDoItem({ ...item, completed: event.target.checked })}
                    disabled={isEditing}
                />
                {isEditing && <input type="text" value={editingValue} onChange={(event) => setEditingValue(event.target.value)} />}
                {!isEditing && item.title}
            </label>
            <div className="todo-item__setting">
                <Button
                    type="button"
                    class="todo__button todo__button--delete todo__button--small"
                    label="delete"
                    onClick={() => removeToDoItem(item)}
                />
                {isEditing &&
                    <Button
                        type="button"
                        class="todo__button todo__button--submit todo__button--small"
                        label="save"
                        onClick={() => handleEditClick(item)}
                    />
                }
                {!isEditing &&

                    <Button
                        type="button"
                        class="todo__button todo__button--edit todo__button--small"
                        label="edit"
                        onClick={() => handleEditClick(item)}
                    />
                }
            </div>
        </li>
    )
}