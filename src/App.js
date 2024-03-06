import { React } from 'react'
import ToDoHeader from './components/ToDoHeader';
import ToDo from './components/ToDo';

import './App.css';

function App() {
  return (
    <div className="todo-app">
      <ToDoHeader header="My To Do App" />

      <ToDo />
    </div>
  );
}

export default App;
