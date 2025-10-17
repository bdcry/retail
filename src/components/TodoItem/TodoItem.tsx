import type { JSX } from 'react';
import type { TodoItemProps } from './types';

const TodoItem = ({ id, title, completed, onCompletedChange }: TodoItemProps): JSX.Element => {
  const baseTaskItem = 'border-2 rounded-md';
  const variantTaskItem = completed ? 'border-green-500' : 'border-gray-400';
  const baseTitle = 'text-lg';
  const variantTitle = completed ? 'line-through text-gray-400' : '';

  return (
    <>
      <li className={`${baseTaskItem} ${variantTaskItem}`}>
        <label className="flex gap-2 items-center justify-between p-3 cursor-pointer">
          <p className={`${baseTitle} ${variantTitle}`}>{title}</p>
          <input
            type="checkbox"
            checked={completed}
            className="scale-125"
            onChange={() => onCompletedChange(id)}
          />
        </label>
      </li>
    </>
  );
};

export default TodoItem;
