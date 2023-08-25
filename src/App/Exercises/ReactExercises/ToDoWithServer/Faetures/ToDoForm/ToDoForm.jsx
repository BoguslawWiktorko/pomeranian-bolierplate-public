import './styles.css';
import { useEffect, useState } from 'react';
import { Button, Label, Input, InputTextArea } from '../../index';
import { LocalDevApiClient } from '../../../../../ApiClients/LocalDevApiClient';

const BASE_URL = 'http://localhost:3333/';
const apiClient = new LocalDevApiClient({ baseUrl: BASE_URL });

export const ToDoForm = ({ handleGoBack, isAddForm, id }) => {
  const [isError, setIsError] = useState(false);
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');

  const getApiPromiseForSubmit = () => {
    if (isAddForm) {
      return apiClient.addToDo({ author, note, title });
    }
    return apiClient.updateToDo(id, { author, note, title });
  };

  useEffect(() => {
    if (!isAddForm && id) {
      const getToDoAsync = async () => {
        try {
          const { author, note, title } = await apiClient.getToDo(id);
          setAuthor(author);
          setNote(note);
          setTitle(title);
          setIsError(false);
        } catch (error) {
          console.log(error);
          setIsError(true);
        }
      };
      getToDoAsync();
    }
  }, [id, isAddForm]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await getApiPromiseForSubmit();
      console.log(data);
      handleGoBack();
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  // const handleGoBack = () => {};
  return (
    <div>
      <p>{isAddForm ? 'Dodaj zadanie' : 'Edycja zadania'}</p>
      <form className="todo-form" onSubmit={handleSubmit}>
        <Label htmlFor="title">Tytuł</Label>
        <Input
          onChange={(element) => setTitle(element.target.value)}
          id="title"
          value={title}
          placeholder={'Cos do roboty'}
        />

        {isAddForm && (
          <>
            {' '}
            <Label htmlFor="author">Autor</Label>
            <Input
              onChange={(element) => setAuthor(element.target.value)}
              id="author"
              value={author}
              placeholder="Tomasz NN"
            />{' '}
          </>
        )}

        <Label htmlFor="note">Treść</Label>
        <InputTextArea
          onChange={(element) => setNote(element.target.value)}
          id="note"
          value={note}
          placeholder={'poleżec'}
        />

        <p className="todo-form__error">
          {isError && 'Wystapił błąd coś spieprzyłes'}
        </p>

        <div className="todo-form__controls">
          <Button type="reset" onClick={handleGoBack} variant="secondary">
            Cofnij
          </Button>
          <Button type="submit">{isAddForm ? 'Dodaj' : 'Zapisz'}</Button>
        </div>
      </form>
    </div>
  );
};
