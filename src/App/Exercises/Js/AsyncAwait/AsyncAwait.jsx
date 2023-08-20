import { useState } from 'react';
import './styles.css';
import { AsyncAwaitExample1 } from './AsyncAwaitExample1';
import { AsyncAwaitExample2 } from './AsyncAwaitExample2';
import { AsyncAwaitExample3 } from './AsyncAwaitExample3';
import { AsyncAwaitExercise } from './AsyncAwaitExercise';
import { AsyncAwaitExercise2 } from './AsyncAwaitExercise2';

export function AsyncAwait() {
  return (
    <div className="promise-excercise">
      <h3>Zadanie useEffect i Promise example</h3>

      <AsyncAwaitExample1 />
      <AsyncAwaitExample2 />
      <AsyncAwaitExample3 />

      <h3>Zadanie useEffect i Promise exercise</h3>
      <AsyncAwaitExercise />
      <AsyncAwaitExercise2 />
    </div>
  );
}
