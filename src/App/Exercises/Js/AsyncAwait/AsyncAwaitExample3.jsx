import { useState } from 'react';

const getSomeResult = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) resolve('Success');
      if (!success) reject('Rejected');
    }, 1000);
  });
};

export function AsyncAwaitExample3() {
  const [promiseResult, setPromiseResult] = useState('empty');

  const handleOnClick = async () => {
    try {
      // const result = await promise;
      // setPromiseResult(result);
      const data = await getSomeResult();
      setPromiseResult(data);
    } catch (error) {
      setPromiseResult(error);
    } finally {
      console.log('Zakończono');
    }
  };
  // do zrobienia
  return (
    <div className="promise-excercise">
      <h3>Async Await Example 2</h3>
      <button type="button" onClick={handleOnClick}>
        Start
      </button>
      <button type="button" onClick={() => setPromiseResult('cleared')}>
        Clear
      </button>
      <div>result: {promiseResult}</div>
    </div>
  );
}
