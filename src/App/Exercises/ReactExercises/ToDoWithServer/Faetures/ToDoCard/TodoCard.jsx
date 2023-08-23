import './styles.css';

import { DeleteIcon } from '../../Images/DeleteIcon';
import { MarkAsDoneIcon } from '../../Images/MarkAsDoneIcon';
import { formatDate } from '../../Utilities/formatDate.js';

const ERROR_MESSAGE = 'Nie udało się ukończyć';
export const ToDoCard = ({
  todo,
  handleMarkAsDone,
  handleDelete,
  isDeleteError,
  isMarkAsDoneError,
}) => {
  const { title, author, createdAt, note, doneDate, isDone } = todo;
  return (
    <div className={`todo-card ${isDone && 'todo-card__done'}`}>
      <div className="todo-card__details">
        <h2 className="todo-card__title">{title}</h2>
        <p className="todo-card__author">{author}</p>
        <p className="todo-card__createdAt">{formatDate(createdAt)}</p>
        <p className="todo-card__note">{note}</p>
      </div>
      <div className="todo-card__aside">
        <div className="todo-card_controls">
          {!isDone && (
            <MarkAsDoneIcon
              className={`todo-card__markAsDone ${
                isMarkAsDoneError && 'todo-card__markAsDoneDoneError'
              }`}
              onClick={handleMarkAsDone}
            />
          )}

          <DeleteIcon
            className={`todo-card__delete ${
              isDeleteError && 'todo-card__deleteError'
            }`}
            onClick={handleDelete}
          />
        </div>
        <div className="todo-card_message">
          {(isDeleteError || isMarkAsDoneError) && ERROR_MESSAGE}
        </div>
        <div className="todo-card_status">
          {isDone && (
            <>
              <MarkAsDoneIcon className=" todo-card__markAsDoneDone" />
              <div className="todo-card__doneDate">{formatDate(doneDate)}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
