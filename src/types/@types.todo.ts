export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}
export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};

export type TodoAction =
  | { type: 'ADD_TODO'; payload: ITodo }
  | { type: 'UPDATE_TODO'; payload: number };
