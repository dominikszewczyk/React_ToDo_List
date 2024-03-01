import './App.css';
import ToDoForm from './components/ToDoForm';
import './components/ToDoHeader';
import ToDoHeader from './components/ToDoHeader';
import ToDoList from './components/ToDoList';
import ToDoWrapper from './components/ToDoWrapper';

const toDoItems = [
  {task: 'Finalize React course'},
  {task: 'Start React Hook course'},
  {task: 'Crate react "To Do list" App'},
  {task: "One more"}
];

function App() {
  return (
    <div className="todo-app">
      <ToDoHeader header="My To Do App" />

      <ToDoWrapper>
        <ToDoForm />
      </ToDoWrapper>

      <ToDoWrapper>
        <ToDoList items={ toDoItems }/>
      </ToDoWrapper>
    </div>
  );
}

export default App;
