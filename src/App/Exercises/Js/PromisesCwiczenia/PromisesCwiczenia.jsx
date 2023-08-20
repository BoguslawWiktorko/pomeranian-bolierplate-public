import { useEffect, useState } from 'react';
// import { PromisesCwiczenie1 } from './PromisesCwiczenie1';
// import { PromisesCallBackHell } from './PromisesCallBackHell';

export const PromisesCwiczenia = () => {
  const [user, setUser] = useState();

  function loadUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ id: 1, name: 'John Doe' }), 1000);
    });
  }

  const loadAllUserData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({}), 1000);
    });
  };
  function loadUserDetails(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: userId, age: 30, country: 'Poland' });
      }, 1000);
    });
  }

  loadAllUserData()
    .then(() => {
      console.log('1 promise');
      return loadUser();
    })
    .then((res) => {
      console.log('2 promise');
      const userId = res.id;
      return loadUserDetails(userId);
    })

    .then((res) => {
      console.log('3 promise');
      console.log(res);
      // setUser(res) --------> Tu już nie działa
    });

  return (
    <div>
      <button>Load user data</button>
    </div>
  );
};
