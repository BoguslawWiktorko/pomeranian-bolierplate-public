import { useEffect, useState } from 'react';
import { Button } from '../../index';
import { ToDoCard } from '../ToDoCard/TodoCard';
import { LocalDevApiClient } from '../../../../../ApiClients/LocalDevApiClient';
import './styles.css';

const BASE_URL = 'http://localhost:3333/';
const apiClient = new LocalDevApiClient({ baseUrl: BASE_URL });

export const ToDoList = ({ handleAddToDo, handleEdit }) => {
  const [todos, setTodos] = useState([]);
  const [isGetListError, setIsGetListError] = useState(false);
  const [markAsDoneErrors, setMarkAsDoneErrors] = useState([]);
  const [deleteErrors, setDeleteErrors] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const promise = apiClient.getAllToDos(controller.signal);
    updateToDos(promise);
    return () => controller.abort();
  }, []);

  const updateToDos = (promise) => {
    promise
      .then((data) => {
        setTodos(data);
        setIsGetListError(false);
      })
      .catch((error) => {
        setIsGetListError(true);
        setTodos([]);
      });
  };
  const handleRefresh = () => {
    const promise = apiClient.getAllToDos();
    updateToDos(promise);
  };
  const handleMarkAsDone = (id) => {
    apiClient
      .markAsDone(id)
      .then((newToDo) =>
        setTodos((currentTodo) =>
          currentTodo.map((todo) => (todo.id === id ? newToDo : todo))
        )
      )
      .catch((error) => {
        console.log(error);
        setMarkAsDoneErrors((errors) => [...errors, id]);
      });
  };

  useEffect(() => {
    if (markAsDoneErrors.length > 0) {
      setTimeout(() => setMarkAsDoneErrors([]), 1000);
    }
  }, [markAsDoneErrors]);

  const handleDelete = async (id) => {
    apiClient
      .deleteToDo(id)
      .then(() => {
        setTodos((currentTodo) => {
          return currentTodo.filter((todo) => todo.id !== id);
        });
      })
      .catch((error) => {
        console.log(error);
        setDeleteErrors((errors) => [...errors, id]);
      });
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
            handleEdit={() => handleEdit(todo.id)}
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
