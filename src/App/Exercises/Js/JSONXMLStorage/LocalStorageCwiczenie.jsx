import { useState } from 'react';

export const LocalStorageCwiczenie = () => {
  const COUNT_LOCAL_STORAGE = JSON.parse(localStorage.getItem('count'));
  const [count, setCount] = useState(COUNT_LOCAL_STORAGE || 0);

  const handleAdd = () => {
    const currentCount = count + 1;
    setCount(currentCount);
    localStorage.setItem('count', currentCount);
  };

  const handleReset = () => {
    setCount(0);
    localStorage.clear();
  };

  return (
    <div>
      <p>Count:{count}</p>

      <button onClick={handleAdd}>Increment </button>

      <button onClick={handleReset}>Reset </button>
    </div>
  );
};
