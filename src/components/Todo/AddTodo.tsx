import * as React from 'react';
import { TodoContext } from '../../context/todoContext';
import { TodoContextType } from '../../types/@types.todo';
import './style.css';

interface FormData {
  title: string;
  description: string;
  id: number;
  status: boolean;
}

const AddTodo: React.FC = () => {
  const { saveTodo } = React.useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = React.useState<FormData>({
    title: '',
    description: '',
    id: 0,
    status: false,
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveTodo = (e: React.FormEvent, formData: FormData) => {
    e.preventDefault();
    saveTodo(formData);
  };

  return (
    <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={!formData.title || !formData.description}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
