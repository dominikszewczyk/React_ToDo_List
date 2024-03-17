import { React, useState, useEffect, useReducer } from 'react'
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoList from '../ToDoList/ToDoList';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import tasksReducer from '../../reducers/tasksReducer';

import { setLocalStorageData, getLocalStorageData } from '../../utils/localStorage'
import * as constants from '../../utils/constants'

import './ToDo.style.css';

export default function ToDo() {
    const [toDoList, dispatch] = useReducer(tasksReducer, getLocalStorageData("toDoList"));
    const [theme, setTheme] = useState(getLocalStorageData("theme", constants.lightThemeName))

    useEffect(() => setLocalStorageData("toDoList", toDoList), [toDoList]);
    useEffect(() => setLocalStorageData("theme", theme), [theme]);

    function addToDoItem(toDoTitle) {
        dispatch({ type: "added", title: toDoTitle })
    }

    function toggleToDoItem(toDoItem) {
        dispatch({ type: "completed", item: toDoItem })
    }

    function removeToDoItem(toDoItem) {
        dispatch({ type: "removed", item: toDoItem })
    }

    function updateToDoItem(toDoItem) {
        dispatch({ type: "edited", item: toDoItem })
    }

    function toggleTheme() {
        setTheme((theme) => (theme === constants.lightThemeName ? constants.darkThemeName : constants.lightThemeName));
    }

    return (
        <div className={`todo ${theme}`}>
            <div className="todo__wrapper">

                <div className="todo-header">
                    <div className="header-menu">
                        <ToggleSwitch onClick={toggleTheme} checked={theme === constants.darkThemeName} />
                    </div>
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
        </div>
    )
}
