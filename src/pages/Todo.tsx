import TodoProvider from '../context/todoContext';
import Todos from '../containers/Todos';
import AddTodo from '../components/Todo/AddTodo';
import '../components/Todo/style.css';

const Todo = () => {
  return (
    <TodoProvider>
      <h1 className="title">Context API</h1>
      <AddTodo />
      <Todos />
    </TodoProvider>
  );
};

export default Todo;
