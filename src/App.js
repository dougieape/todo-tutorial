import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos] = useState([]);
  const [ status, setStatus ] = useState('all');
  const [ filteredTodos, setFilteredTodos ] = useState([]);

  //run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter( item => item.completed === true ));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter( item => item.completed === false ));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      setTodos([]);
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Doug's Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} status={status} setStatus={setStatus} />
      <TodoList inputText={inputText} todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
