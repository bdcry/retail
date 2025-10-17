import type { JSX } from 'react';
import type { TodoItemProps } from './types';
import { Trash2Icon } from 'lucide-react';

const TodoItem = ({ id, title, completed, onToggleCompleted, onDeleteTask }: TodoItemProps): JSX.Element => {
  const baseTaskItem = 'border-2 rounded-md';
  const variantTaskItem = completed ? 'border-green-500' : 'border-gray-400';
  const baseTitle = 'text-lg';
  const variantTitle = completed ? 'line-through text-gray-400' : '';

  return (
    <>
      <li className={`${baseTaskItem} ${variantTaskItem} flex items-center gap-2`}>
        <label className="flex gap-2 items-baseline justify-end flex-row-reverse p-3 cursor-pointer grow text-wrap">
          <p className={`${baseTitle} ${variantTitle}`}>{title}</p>
          <input
            type="checkbox"
            checked={completed}
            className="scale-125"
            onChange={() => onToggleCompleted(id)}
          />
        </label>
        <button type="button" onClick={() => onDeleteTask(id)} className='cursor-pointer pr-3 hover:text-red-700'>
          <Trash2Icon size={20} />
        </button>
      </li>
    </>
  );
};

export default TodoItem;
