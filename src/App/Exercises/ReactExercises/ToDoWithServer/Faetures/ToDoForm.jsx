import { useState } from 'react';
import { Button, Label, Input, InputTextArea } from '../index';

import './styles.css';

export const ToDoForm = () => {
  const [isError, setIsError] = useState(false);

  const handleAdd = (event) => {
    event.preventDefault();
    const succsess = Math.random() > 0.5;
    if (succsess) {
      handleGoBack();
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handleGoBack = () => {};
  return (
    <div>
      <p>dodaj zadanie</p>
      <form className="todo-form">
        <Label htmlFor="title">Tytuł</Label>
        <Input id="title" placeholder={'Szczepienie kitku'} />
        <Label htmlFor="author">Autor</Label>
        <Input id="author" placeholder="Heniek" />
        <Label htmlFor="note">TReść</Label>
        <InputTextArea
          id="note"
          placeholder={'mcskiochisuodahcfdndklscnijosdacj ckdsohcidos;jacd'}
        />
        {isError && (
          <p className="todo-form__error">Wystapił błąd coś spieprzyłes</p>
        )}
        <div className="todo-form__controls">
          <Button type="restet" onClick={handleGoBack} variant="secondary">
            Cofnij
          </Button>
          <Button type="submit" onClick={handleAdd}>
            Dodaj
          </Button>
        </div>
      </form>
    </div>
  );
};
