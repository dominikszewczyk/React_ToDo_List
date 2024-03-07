import React from 'react'

import './ToDoList.style.css'

export default function ToDoList({ items }) {
    console.log(items)
    const listItems = items.map(item =>
        <li key={item.id} className="todo-list__item">
            <label>
                <input
                    type="checkbox"
                    disabled={item.completed}
                />
                {item.title}
            </label>
        </li>
    );

    return (

        <div className="todo-list__wrapper">
            {items.length === 0 && <p className="todo-paragraph--empty">No items!</p>}
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
                    <ul className="todo-list">{listItems}</ul>
                </>
            }
        </div>
    )
}
