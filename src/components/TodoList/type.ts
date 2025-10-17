import type { stupidTodoData } from '../../data/types';

export type TodoListProps = {
  todos: stupidTodoData[];
  onChange: (id: number) => void;
  onDelete: (id: number) => void;
};
