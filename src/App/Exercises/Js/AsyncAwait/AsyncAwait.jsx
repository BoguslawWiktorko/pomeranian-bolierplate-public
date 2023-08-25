import './styles.css';
import { AsyncAwaitExample1 } from './AsyncAwaitExample1';
import { AsyncAwaitExample2 } from './AsyncAwaitExample2';
import { AsyncAwaitExample3 } from './AsyncAwaitExample3';
import { AsyncAwaitExercise } from './AsyncAwaitExercise';
import { AsyncAwaitExercise2 } from './AsyncAwaitExercise2';
import { PromiseExample1 } from './PromiseExample1';
import { PromiseExample2 } from './PromiseExample2';
import { PromiseExample3 } from './PromiseExample3';
import { TryCatchFinally } from './TryCatchFinally';
import { PromiseExcercise } from './PromiseExcercise';
import { PromiseMethods } from './PromiseMethods';

export function AsyncAwait() {
  return (
    <div className="promise-excercise">
      <h3>Przykłady promise</h3>
      <PromiseExample1 />
      <PromiseExample2 />
      <PromiseExample3 />

      <TryCatchFinally />

      <PromiseExcercise />

      <AsyncAwaitExample1 />
      <AsyncAwaitExample2 />
      <AsyncAwaitExample3 />

      <AsyncAwaitExercise />
      <AsyncAwaitExercise2 />
      <PromiseMethods />
    </div>
  );
}
