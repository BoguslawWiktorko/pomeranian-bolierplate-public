import { useDispatch } from 'react-redux';
import { decrement, decrementBy, reset } from '../../../Store/counterSlice';

export const ReduxStealer = () => {
  const dispatch = useDispatch();
  return (
    <div className="redux-container">
      <h3>Redux Stealer Component</h3>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(decrementBy(7))}>-7</button>
      <button onClick={() => dispatch(decrementBy(14))}>-14</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
