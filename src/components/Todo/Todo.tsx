import * as React from 'react';
import { ITodo } from '../../types/@types.todo';

type Props = {
  todo: ITodo;
  updateTodo: () => void;
};
const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : '';

  return (
    <div className="card">
      <div className="card--text">
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <button
        onClick={() => updateTodo()}
        className={todo.status ? `hide-button` : 'Card--button'}
      >
        Complete
      </button>
    </div>
  );
};
export default Todo;
