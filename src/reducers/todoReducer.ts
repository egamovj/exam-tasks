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

export const todoReducer = (state: ITodo[], action: TodoAction): ITodo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'UPDATE_TODO':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, status: true } : todo
      );

    default:
      return state;
  }
};
