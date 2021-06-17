import {useState} from 'react';
import './App.css';

import Form from './componentes/Form';
import TodoList from './componentes/todoList';
function App() {
  const[inputText,setInputText] = useState("");
  const[todos,setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Lista de Cristian</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList/>
    </div>
  );
}

export default App;
