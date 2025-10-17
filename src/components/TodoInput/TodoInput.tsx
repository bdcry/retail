import { useState, type JSX } from 'react';
import type { TodoInputProps } from './type';

const TodoInput = ({ onSumbit }: TodoInputProps): JSX.Element => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!input.trim()) return;
    onSumbit(input.trim());
    setInput('');
  };

  return (
    <form className="flex max-w-lg mx-auto p-5 pb-0" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What need to be done?"
        className="rounded-s-md grow border-2 border-black p-2 focus:border-slate-800"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800 cursor-pointer">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
