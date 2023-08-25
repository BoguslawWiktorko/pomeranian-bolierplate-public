import { useState } from 'react';
import './styles.css';

export function AsyncAwaitExercise2() {
  const [promiseResult, setPromiseResult] = useState('empty');

  const SECOND = 1000;
  const DELAY = SECOND * 1;

  function loadUser() {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe' });
      }, DELAY);
    });
  }

  function loadUserDetails(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) resolve({ id: userId, age: 30, country: 'Poland' });
        reject('błąd server: nieudane wyszukanie dla userId: ' + userId);
      }, DELAY);
    });
  }

  async function loadAllUserData(setValue) {
    //   loadUser()
    //     .then((user) => {
    //       return [user, loadUserDetails(user.id)];
    //     })
    //     .then(([user, dataPromise]) =>
    //       dataPromise.then((data) => {
    //         console.log(user, data);
    //         setValue(JSON.stringify(data) + ';' + JSON.stringify(data));
    //       })
    //     )
    //     .catch(setValue);

    try {
      const user = await loadUser();
      // console.log(user);
      const userDetails = await loadUserDetails(user.id);
      // console.log(userDetails);
      setValue(JSON.stringify(user) + ';' + JSON.stringify(userDetails));
    } catch (error) {
      setValue(error);
    }
  }

  return (
    <div className="promise-excercise">
      <h3> Async Await i useEffect zad 2</h3>
      <button type="button" onClick={() => loadAllUserData(setPromiseResult)}>
        Start
      </button>
      <button type="button" onClick={() => setPromiseResult('cleared')}>
        Clear
      </button>
      <div>result: {promiseResult}</div>
    </div>
  );
}
