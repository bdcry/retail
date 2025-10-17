import type { JSX } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import type { TodoListProps } from './type';
import TodoListDummy from './TodoListDummy';

const TodoList = ({ todos, onChange, onDelete }: TodoListProps): JSX.Element => {
  return (
    <>
      <h2 className="text-3xl uppercase font-mono mx-auto max-w-lg text-left pl-5 mt-5">Your tasks 📋</h2>
      <ul className="max-w-lg mx-auto flex flex-col gap-2 p-5 pt-2">
        {todos.length > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onToggleCompleted={onChange}
              onDeleteTask={onDelete}
            />
          ))}
          {todos.length === 0 && <TodoListDummy />}
      </ul>
    </>
  );
};

export default TodoList;
