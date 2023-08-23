import { useEffect, useState } from 'react';
import { Button } from '../../index';
import { ToDoCard } from '../ToDoCard/TodoCard';

import './styles.css';

const TODOS = [
  {
    id: 1,
    title: 'Todo 1',
    createdAt: '2021-05-22T11:20:22.935Z',
    author: 'Anonymous',
    isDone: true,
    doneDate: '2021-05-22T11:20:22.935Z',
    note: 'Done the course',
  },
  {
    id: 3,
    title: 'Todo 18',
    note: 'Poprowadzić kurs',
    author: 'NowyNikolas',
    isDone: false,
    createdAt: '2023-08-19T08:34:38.228Z',
  },
  {
    id: 4,
    title: 'AddButton',
    note: 'newTODO',
    author: 'Nikolas',
    isDone: false,
    createdAt: '2023-08-19T10:29:26.739Z',
  },
  {
    id: 5,
    title: 'AddButton',
    note: 'newTODO',
    author: 'Nikolas',
    isDone: false,
    createdAt: '2023-08-19T10:31:00.158Z',
  },
];

export const ToDoList = ({ handleAddToDo }) => {
  const [todos, setTodos] = useState([]);
  const [isGetListError, setIsGetListError] = useState(false);

  const getAllTodos = () => {
    const succsess = Math.random() > 0.5;
    if (succsess) {
      setTodos(TODOS);
      setIsGetListError(false);
    } else {
      setIsGetListError(true);
      setTodos([]);
    }
  };
  useEffect(() => {
    getAllTodos();
  }, []);

  const handleRefresh = () => {
    getAllTodos();
  };
  const handleMarkAsDone = (id) => {
    // console.log(id);
    const succsess = Math.random() > 0.5;
    if (succsess) {
      setTodos((currentTodos) => {
        return currentTodos.map((todo) => {
          // console.log(id);
          // console.log(todo);
          if (todo.id === id) {
            console.log(todo);
            return {
              ...todo,
              isDone: true,
              doneDate: new Date().toISOString(),
            };
          } else {
            return todo;
          }
        });
      });
    } else {
    }
  };
  const handleDelete = () => {};

  return (
    <div className="todo-list">
      <div className="todo-list__container">
        {TODOS.map((todo) => (
          <ToDoCard
            key={todo.id}
            todo={todo}
            handleMarkAsDone={() => handleMarkAsDone(todo.id)}
            handleDelete={() => handleDelete(todo.id)}
            isDeleteError={false}
            isMarkAsDoneError={true}
          />
        ))}
      </div>
      <Button onClick={handleAddToDo}>Dodaj zadanie</Button>

      {isGetListError && (
        <>
          <Button onClick={handleRefresh}>Odswiez widok</Button>
          <p>Nie udało się spróbuj jeszcze raz</p>
        </>
      )}
    </div>
  );
};
