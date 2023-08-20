export function InputTextArea({ id, placeholder, value }) {
  return (
    <textarea
      className="todo-form__input todo-form__textarea"
      type="textarea"
      id={id}
      placeholder={placeholder}
      value={value}
    />
  );
}
