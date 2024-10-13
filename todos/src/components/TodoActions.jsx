import React from 'react';

const TodoActions = ({ index, editTodo, deleteTodo }) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => editTodo(index)}
        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors"
      >
        Edit
      </button>
      <button
        onClick={() => deleteTodo(index)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoActions;
