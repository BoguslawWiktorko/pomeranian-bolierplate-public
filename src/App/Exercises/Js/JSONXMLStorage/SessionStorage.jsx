import { useState } from 'react';

export const SessionStorage = () => {
  const COUNT_USER_SESSION_STORAGE = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(COUNT_USER_SESSION_STORAGE || 0);

  const handleSaveData = () => {
    const user = {
      name: 'Hohn',
      age: 50,
    };
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };
  return (
    <div>
      <p>Name: {user?.name}</p>
      <p>Age: {user?.age}</p>
      <button onClick={handleSaveData}>Update sessionStore</button>
    </div>
  );
};
