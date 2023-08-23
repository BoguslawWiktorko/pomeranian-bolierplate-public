import './styles.css';

import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { ToDoForm } from './Faetures/ToDoForm/ToDoForm';
import { ToDoList } from './Faetures/ToDoList/ToDoList';
import { useState } from 'react';

export const ToDoWithServer = () => {
  // status list/ add / edit
  const [state, setState] = useState('list');

  const handleAddToDo = () => {
    setState('add');
  };
  const handleGoBack = () => {
    setState('list');
  };
  return (
    <div className="todo">
      <MasterHeader value="TO DO OR NOT TO DO" />
      <p>lista zadań</p>
      {state === 'list' && <ToDoList handleAddToDo={handleAddToDo} />}
      {state === 'add' && <ToDoForm handleGoBack={handleGoBack} />}
    </div>
  );
};
