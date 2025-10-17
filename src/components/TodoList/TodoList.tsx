import type { JSX } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import type { TodoListProps } from './type';

const TodoList = ({ todos, onChange }: TodoListProps): JSX.Element => {
  return (
    <ul className="max-w-lg mx-auto flex flex-col gap-2 bg-slate-100 rounded-md p-5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggleCompleted={onChange}
        />
      ))}
    </ul>
  );
};

export default TodoList;
