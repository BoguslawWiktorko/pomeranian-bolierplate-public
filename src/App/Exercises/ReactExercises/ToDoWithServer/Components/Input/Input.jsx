import './styles.css';

export function Input({ onChange, id, value, placeholder }) {
  return (
    <div>
      <input
        id={id}
        value={value}
        type="text"
        className={'todo-input'}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
