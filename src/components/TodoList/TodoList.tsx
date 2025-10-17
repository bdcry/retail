import type { JSX } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import type { TodoListProps } from './type';

const TodoList = ({ todos, onChange, onDelete }: TodoListProps): JSX.Element => {
  return (
    <ul className="max-w-lg mx-auto flex flex-col gap-2 p-5">
      <h2 className="text-3xl uppercase font-mono">Your tasks 📋</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggleCompleted={onChange}
          onDeleteTask={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
