import './styles.css';

import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { ToDoForm } from './Faetures/ToDoForm';

export const ToDoWithServer = () => {
  return (
    <div className="todo">
      <MasterHeader />
      <p>lista zadań</p>
      <ToDoForm />
    </div>
  );
};
