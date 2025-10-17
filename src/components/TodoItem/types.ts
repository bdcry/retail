export type TodoItemProps = {
  id: number;
  title: string;
  completed: boolean;
  onToggleCompleted: (id: number) => void;
};
