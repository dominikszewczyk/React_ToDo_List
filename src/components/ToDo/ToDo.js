import { React, useState } from 'react'
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoList from '../ToDoList/ToDoList';

import './ToDo.style.css';

export default function ToDo() {
    const [toDoList, setToDoList] = useState([])

    function addToDoItem(toDoTitle) {
        const newToDoItem = { id: crypto.randomUUID(), title: toDoTitle, completed: false };
        setToDoList([newToDoItem, ...toDoList]);
    }

    function toggleToDoItem(id, completed) {
        const updatedToDoList = toDoList.map(item => {
            if (item.id === id) {
                return { ...item, completed }
            } else {
                return item
            }
        });
        updatedToDoList.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1))
        setToDoList(updatedToDoList);
    }

    function removeToDoItem(id) {
        const updatedToDoList = toDoList.filter(item => item.id !== id);
        setToDoList(updatedToDoList);
    }

    function updateToDoItem(id, title) {
        const updatedToDoList = toDoList.map(item => {
            if (item.id === id) {
                return { ...item, title }
            } else {
                return item
            }
        });
        setToDoList(updatedToDoList);
    }

    return (
        <div className="todo__wrapper">

            <div className="todo-header">
                <h1 className="todo-header__title">ToDo App</h1>
            </div>

            <ToDoForm onSubmit={addToDoItem} />

            <ToDoList
                items={toDoList}
                toggleToDoItem={toggleToDoItem}
                removeToDoItem={removeToDoItem}
                updateToDoItem={updateToDoItem}
            />
        </div>
    )
}
