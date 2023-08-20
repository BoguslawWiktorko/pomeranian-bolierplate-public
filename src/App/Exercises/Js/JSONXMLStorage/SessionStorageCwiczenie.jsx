import { useState } from 'react';

export const SessionStorageCwiczenie = () => {
  let user = {
    name: 'John',
    lastName: 'Doe',
  };
  const handleUpdateData = () => {
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div>
      <p>.</p>

      <button onClick={handleUpdateData}>Data update </button>

      <button>Reset </button>
    </div>
  );
};
