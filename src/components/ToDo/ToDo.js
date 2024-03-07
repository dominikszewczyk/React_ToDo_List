import { React, useState } from 'react'
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoList from '../ToDoList/ToDoList';

import './ToDo.style.css';

export default function ToDo() {
    const [toDoList, setToDoList] = useState([])

    function addToDoItem(toDoTitle) {
        const newToDoItem = { id: crypto.randomUUID(), title: toDoTitle, completed: false };
        setToDoList([...toDoList, newToDoItem]);
    }

    return (
        <div className="todo__wrapper">

            <div className="todo-header">
                <h1 className="todo-header__title">ToDo App</h1>
            </div>

            <ToDoForm onSubmit={addToDoItem} />

            <ToDoList items={toDoList} />
        </div>
    )
}
