import TodoProvider from '../context/todoContext';
import ThemeProvider from '../context/themeContext';
import Todos from '../containers/Todos';
import AddTodo from '../components/Todo/AddTodo';
import ThemeWrapper from '../components/Todo/ThemeWrapper';
import '../components/Todo/style.css';

const Todo = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeWrapper>
          <h1 className="title">Context API</h1>
          <AddTodo />
          <Todos />
        </ThemeWrapper>
      </TodoProvider>
    </ThemeProvider>
  );
};

export default Todo;
