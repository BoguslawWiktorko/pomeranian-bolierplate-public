import { useState } from 'react';
import './styles.css';

const DELAY = 100;
const TIMES = 1e3;

function getSomething(size, delay = DELAY) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      const result = Array(size)
        .fill(0)
        .map((_, index) => ({ index }));
      resolve('Sukces' + result.length);
    }, delay);
  });
}

export function PromiseMethods() {
  const [result, setResult] = useState('empty');

  const handleOneByOne = async () => {
    console.time('promise-one-by-one');
    const p1 = await getSomething(TIMES * 1);
    const p2 = await getSomething(TIMES * 2);
    const p3 = await getSomething(TIMES * 3);
    console.timeEnd('promise-one-by-one');
    setResult([p1, p2, p3].join());
  };
  const handleAll = async () => {
    console.time('promise-all');
    const p1 = getSomething(TIMES * 1);
    const p2 = getSomething(TIMES * 2);
    const p3 = getSomething(TIMES * 3);
    const allDone = await Promise.all([p1, p2, p3]);
    console.log(allDone);
    console.timeEnd('promise-all');
    setResult(allDone.join());
  };
  const handleAllSettled = async () => {
    console.time('promise-all-settled');
    const p1 = getSomething(TIMES * 1);
    const p2 = getSomething(TIMES * 2);
    const p3 = getSomething(TIMES * 3);
    const allSettled = await Promise.allSettled([p1, p2, p3]);
    console.log(allSettled);
    console.timeEnd('promise-all-settled');
    setResult(
      allSettled
        .map(({ status, value, reason }) => `${status}, ${value},${reason}`)
        .join()
    );
  };

  const handleAny = async () => {
    console.time('promise-any');
    const p1 = getSomething(TIMES * 1);
    const p2 = getSomething(TIMES * 2);
    const p3 = getSomething(TIMES * 3);
    const anyFullfiled = await Promise.any([p1, p2, p3]);
    console.log(anyFullfiled);
    console.timeEnd('promise-any');
    setResult(anyFullfiled);
  };
  const handleRace = async () => {
    console.time('promise-race');
    const p1 = getSomething(TIMES * 1);
    const p2 = getSomething(TIMES * 2);
    const p3 = getSomething(TIMES * 3);
    const anyRace = await Promise.race([p1, p2, p3]);
    console.log(anyRace);
    console.timeEnd('promise-race');
    setResult(anyRace);
  };
  return (
    <div className="methods">
      <h3>Promise Methods</h3>
      <button type="button" onClick={handleOneByOne}>
        One by one
      </button>
      <button type="button" onClick={handleAll}>
        Handle ALL
      </button>
      <button type="button" onClick={handleAllSettled}>
        Handle ALL Settled
      </button>
      <button type="button" onClick={handleAny}>
        Handle Any
      </button>
      <button type="button" onClick={handleRace}>
        Handle Race
      </button>
      <button type="button" onClick={() => setResult('cleared')}>
        Clear
      </button>
      <div>result: {result}</div>
    </div>
  );
}
