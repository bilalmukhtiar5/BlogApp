import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [currentTask, setCurrentTask] = useState('');

  const editTodo = (index) => {
    setEditIndex(index);
    setCurrentTask(todos[index].task); // Populate the form with the task being edited
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Function to handle add or edit
  const addOrEditTodo = (task) => {
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, i) => 
        i === editIndex ? { ...todo, task } : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, { task, completed: false }]);
    }
    setCurrentTask(''); // Reset input field after adding or editing
  };

  return (
    <div className='w-96 container mx-auto mt-10'>
      <TodoForm addTodo={addOrEditTodo} currentTask={currentTask} setCurrentTask={setCurrentTask} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
