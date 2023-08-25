export function InputTextArea({ onChange, id, placeholder, value }) {
  return (
    <textarea
      className="todo-form__input todo-form__textarea"
      type="textarea"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
