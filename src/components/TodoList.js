import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        { filteredTodos.map( (todo, index) => (
          <Todo todo={todo} todos={todos} setTodos={setTodos} key={index}/>
        )) }
      </ul>
    </div>
  );
}

export default TodoList;
