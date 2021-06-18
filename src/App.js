import {useState, useEffect} from 'react';
import './App.css';

import Form from './componentes/Form';
import TodoList from './componentes/todoList';
function App() {

  
  
  const[inputText,setInputText] = useState("");
  const[todos,setTodos] = useState([]);
  const[status,setStatus] = useState('all');
  const[filteredTodos,setFilteredTodos] = useState([]);
  
  useEffect(()=>{
    filterHandler();
  },[todos,status]);

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
}


  return (
    <div className="App">
      <header>
        <h1>Lista de Tareas de Cristian</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} status={status}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} status={status}/>
    </div>
  );
}

export default App;
