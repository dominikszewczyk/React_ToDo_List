import { React, useState, useEffect } from 'react'
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoList from '../ToDoList/ToDoList';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import ToDoItemContext from '../../context/ToDoItemContext.js'

import './ToDo.style.css';

export default function ToDo() {
    const [toDoList, setToDoList] = useState(getLocalData("toDoList", []))
    const [theme, setTheme] = useState(getLocalData("theme", "light"))

    useEffect(() => setLocalData("toDoList", toDoList), [toDoList]);
    useEffect(() => setLocalData("theme", theme), [theme]);

    function getLocalData(id, defaultValue) {
        const localData = localStorage.getItem(id)
        return (localData == null) ? defaultValue : JSON.parse(localData);
    }

    function setLocalData(id, data) {
        localStorage.setItem(id, JSON.stringify(data))
    }


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

    function toggleTheme() {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
    }

    return (
        <div className={`todo ${theme}`}>
            <div className="todo__wrapper">

                <div className="todo-header">
                    <div className="header-menu">
                        <ToggleSwitch onClick={toggleTheme} />
                    </div>
                    <h1 className="todo-header__title">ToDo App</h1>
                </div>

                <ToDoForm onSubmit={addToDoItem} />

                <ToDoItemContext.Provider value={{ toDoList, toggleToDoItem, removeToDoItem, updateToDoItem }}>
                    <ToDoList />
                </ToDoItemContext.Provider>
            </div>
        </div>
    )
}
