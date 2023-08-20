import { Children } from 'react';
import './styles.css';

export function Label({ htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="todo-form__label">
        {children}{' '}
      </label>
    </div>
  );
}
