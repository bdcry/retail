import { useState } from 'react';
import { stupidData } from './data/todo';
import TodoList from './components/TodoList/TodoList';
import TodoInput from './components/TodoInput/TodoInput';

const App = () => {
  const [todos, setTodos] = useState(stupidData);

  const handleTodoIsCompleted = (id: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const handleAddTask = (title: string): void => {
    setTodos((prevTodos) => [...prevTodos, { id: todos.length + 1, title, completed: false }]);
  };

  const handleDeleteTask = (id: number): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="p-10 h-screen overflow-auto">
      <h1 className="font-bold text-center text-4xl mb-10">ReTail Todos App</h1>
      <section className="bg-slate-100 rounded-2xl max-w-md mx-auto p-5 shadow-xl">
        <TodoInput onSumbit={handleAddTask} />
        <TodoList todos={todos} onChange={handleTodoIsCompleted} onDelete={handleDeleteTask} />
      </section>
    </main>
  );
};

export default App;
