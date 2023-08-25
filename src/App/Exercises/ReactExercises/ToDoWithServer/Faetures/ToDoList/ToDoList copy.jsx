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
const BASE_URL = 'http://localhost:3333/';

export const ToDoList = ({ handleAddToDo }) => {
  const [todos, setTodos] = useState([]);
  const [isGetListError, setIsGetListError] = useState(false);
  const [markAsDoneErrors, setMarkAsDoneErrors] = useState([]);
  const [deleteErrors, setDeleteErrors] = useState([]);

  const getAllTodos = async () => {
    const requestPath = BASE_URL + 'api/todo';
    try {
      const response = await fetch(requestPath);
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      setTodos(data);
      setIsGetListError(false);
    } catch (error) {
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
      setMarkAsDoneErrors((errors) => [...errors, id]);
    }
  };

  useEffect(() => {
    if (markAsDoneErrors.length > 0) {
      setTimeout(() => setMarkAsDoneErrors([]), 1000);
    }
  }, [markAsDoneErrors]);

  const handleDelete = async (id) => {
    const requestPath = `api/todo/${id}`;
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers, method: 'DELETE' };
    try {
      const response = await fetch(BASE_URL + requestPath, options);
      if (!response.ok) throw new Error(response.status);
      // const data = await response.json();
      // console.log(data);
      setTodos((currentTodo) => {
        return currentTodo.filter((todo) => todo.id !== id);
      });
    } catch (error) {
      setDeleteErrors((errors) => [...errors, id]);
    }
  };

  useEffect(() => {
    if (deleteErrors.length > 0) {
      setTimeout(() => setDeleteErrors([]), 1000);
    }
  }, [deleteErrors]);

  return (
    <div className="todo-list">
      <div className="todo-list__container">
        {todos.map((todo) => (
          <ToDoCard
            key={todo.id}
            todo={todo}
            handleMarkAsDone={() => handleMarkAsDone(todo.id)}
            handleDelete={() => handleDelete(todo.id)}
            isDeleteError={deleteErrors.some((errorId) => errorId === todo.id)}
            deleteError={deleteErrors.some((errorId) => errorId === todo.id)}
          />
        ))}
      </div>
      {/* <Button onClick={handleAddToDo}>Dodaj zadanie</Button> */}

      {isGetListError && (
        <>
          <Button onClick={handleRefresh}>Odswiez widok</Button>
          <p>Nie udało się spróbuj jeszcze raz</p>
        </>
      )}

      {!isGetListError && todos.length === 0 && (
        <>
          <Button onClick={handleAddToDo}>Dodaj zadanie</Button>
          <p>Brawo nie masz nic do roboty</p>
        </>
      )}
      {todos.length > 0 && <Button onClick={handleAddToDo}>Dodaj</Button>}
    </div>
  );
};
