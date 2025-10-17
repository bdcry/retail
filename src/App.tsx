import { useState } from 'react';
import { stupidData } from './data/todo';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [todos, setTodos] = useState(stupidData);

  const setTodoIsCompleted = (id: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };
  return (
    <main className="p-10 h-screen">
      <h1 className="font-bold text-center text-4xl mb-10">ReTail Todos App</h1>
      <TodoList todos={todos} onChange={setTodoIsCompleted} />
    </main>
  );
};

export default App;
