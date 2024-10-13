import React from 'react';

const TodoForm = ({ addTodo, currentTask, setCurrentTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentTask.trim()) return;
    addTodo(currentTask);
    setCurrentTask(''); // Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Enter a task"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded ml-2 hover:bg-green-600"
      >
        {currentTask ? 'Edit Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TodoForm;
