import './styles.css';

import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { ToDoForm } from './Faetures/ToDoForm/ToDoForm';
import { ToDoList } from './Faetures/ToDoList/ToDoList';
import { useState } from 'react';

export const ToDoWithServer = () => {
  // status list/ add / edit
  const [state, setState] = useState('list');
  const [editId, setEditId] = useState(undefined);

  const handleAddToDo = () => {
    setState('add');
  };
  const handleGoBack = () => {
    setState('list');
  };
  const handleEdit = (id) => {
    setState('edit');
    setEditId(id);
    console.log(id);
  };
  return (
    <div className="todo">
      <MasterHeader value="TO DO OR NOT TO DO" />
      <p>lista zadań</p>
      {state === 'list' && (
        <ToDoList handleAddToDo={handleAddToDo} handleEdit={handleEdit} />
      )}
      {state === 'add' && <ToDoForm handleGoBack={handleGoBack} isAddForm />}
      {state === 'edit' && <ToDoForm handleGoBack={handleGoBack} id={editId} />}
      {/* {state === 'add' && <ToDoForm handleGoBack={handleGoBack} isAddForm={true} />}
      {state === 'edit' && <ToDoForm handleGoBack={handleGoBack} isAddForm={false}/>} */}
    </div>
  );
};
