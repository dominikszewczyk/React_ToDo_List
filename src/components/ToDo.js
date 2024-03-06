import { React, useState } from 'react'
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoWrapper from './ToDoWrapper';

export default function ToDo() {
    const [toDoList, setToDoList] = useState([])

    function addToDoItem(toDoTitle) {
        const newToDoItem = {id: crypto.randomUUID(), title: toDoTitle, completed: false};
        setToDoList([...toDoList, newToDoItem]);
    }
    return (
        <>
            <ToDoWrapper>
                <ToDoForm onSubmit={ addToDoItem } />
            </ToDoWrapper>

            <ToDoWrapper>
                <ToDoList items={ toDoList }/>
            </ToDoWrapper>
        </>
    )
}
