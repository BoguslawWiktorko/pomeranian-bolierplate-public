import { useEffect, useState } from 'react';

export function AsyncAwaitExercise() {
  const [result, setResult] = useState('');

  async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('I am resolved'), 4000);
    });
  }

  useEffect(() => {
    const inputResult = async () => {
      try {
        const wynik = await fetchData();
        setResult(wynik);
      } catch (error) {
        console.log(error);
      }
    };
    inputResult();
  }, []);

  return (
    <div>
      <h3>Async await cwiczenie z useEffect</h3>
      <div>Result: {result}</div>
    </div>
  );
}
