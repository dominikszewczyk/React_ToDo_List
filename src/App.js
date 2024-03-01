import './App.css';
import ToDoForm from './components/ToDoForm';
import './components/ToDoHeader';
import ToDoHeader from './components/ToDoHeader';
import ToDoList from './components/ToDoList';
import ToDoWrapper from './components/ToDoWrapper';
import { React, useState } from 'react'

const toDoItems = [
  {task: 'Finalize React course'},
  {task: 'Start React Hook course'},
  {task: 'Crate react "To Do list" App'},
  {task: "One more"}
];

function App() {
  const [toDoList, setToDoList] = useState([])

  function addToDoList(title) {
    let newItemArray = {id: "", title, completed: false};
    let newToDoList = toDoList.slice();
    newToDoList.push(newItemArray);
    setToDoList(newToDoList);
  }

  return (
    <div className="todo-app">
      <ToDoHeader header="My To Do App" />

      <ToDoWrapper>
        <ToDoForm onSubmit={ addToDoList } />
      </ToDoWrapper>

      <ToDoWrapper>
        <ToDoList items={ toDoList }/>
      </ToDoWrapper>
    </div>
  );
}

export default App;
