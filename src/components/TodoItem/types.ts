export type TodoItemProps = {
  id: number;
  title: string;
  completed: boolean;
  onCompletedChange: (id: number) => void;
};
