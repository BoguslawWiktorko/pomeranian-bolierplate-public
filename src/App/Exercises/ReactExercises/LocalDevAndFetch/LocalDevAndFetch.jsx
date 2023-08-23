import { useState, useEffect } from 'react';

export function LocalDevAndFetch() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    async function fetchToDos() {
      const results = await fetch('http://localhost:3333/api/todo');

      const data = await results.json();

      console.log(data);

      // debugger;

      setToDoList(data);
    }

    fetchToDos();
  }, []);
  const dataToAdd = {
    id: 6,
    title: 'robota',
    note: 'wywalic smieci',
    author: 'Haniek',
  };
  function handleAdd() {}
  fetch('http://localhost:3333/api/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToAdd),
  });
  return (
    <>
      <h1>TODO List </h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tytuł</th>
            <th>Notatka</th>
            <th>Autor</th>
          </tr>
        </thead>

        <tbody>
          {toDoList.map((listItem) => (
            <tr key={listItem.id}>
              <td>{listItem.id}</td>

              <td>{listItem.title}</td>

              <td>{listItem.note}</td>

              <td>{listItem.author}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAdd}>Add to do</button>
    </>
  );
}
