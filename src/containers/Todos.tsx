import * as React from 'react';
import { ITodo } from '../types/@types.todo';
import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo/Todo';
const Todos = () => {
  const { todos, dispatch } = React.useContext(TodoContext)!;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo
          key={todo.id}
          updateTodo={() => dispatch({ type: 'UPDATE_TODO', payload: todo.id })}
          todo={todo}
        />
      ))}
    </>
  );
};
export default Todos;
