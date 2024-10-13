import React from 'react';
import TodoActions from './TodoActions';

const TodoItem = ({ todo, index, editTodo, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center">
      <span>{todo.task}</span>
      <TodoActions index={index} editTodo={editTodo} deleteTodo={deleteTodo} />
    </li>
  );
};

export default TodoItem;
