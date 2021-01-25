import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, status, setStatus}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {completed: false, text: inputText, id: Math.random() * 1000}]);
    setInputText('');
  }

  const filterHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select" value={status} onChange={filterHandler}>
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
