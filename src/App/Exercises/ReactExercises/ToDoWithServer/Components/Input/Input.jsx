import './styles.css';

export function Input({ id, value, placeholder }) {
  return (
    <div>
      <input
        id={id}
        value={value}
        type="text"
        className={'todo-input'}
        placeholder={placeholder}
      />
    </div>
  );
}
