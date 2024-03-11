import React from 'react'
import Button from '../Button/Button'

import './ToDoList.style.css'

export default function ToDoList({ items, toggleToDoItem, removeToDoItem }) {

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
                                <li key={item.id} className="todo-item">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={item.completed}
                                            onChange={event => toggleToDoItem(item.id, event.target.checked)}
                                        />
                                        {item.title}
                                    </label>
                                    <div className="todo-item__setting">

                                        <button
                                            type="button"
                                            className="todo__button todo__button--delete"
                                            onClick={() => removeToDoItem(item.id)}>delete</button>
                                        {/* <Button
                                            type="button"
                                            class="todo__button todo__button--delete"
                                            label="delete"
                                        /> */}
                                        <Button
                                            type="button"
                                            class="todo__button todo__button--edit"
                                            label="edit"
                                        />
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </>
            }
        </div>
    )
}
