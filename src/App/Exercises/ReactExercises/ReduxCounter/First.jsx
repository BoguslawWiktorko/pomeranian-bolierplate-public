import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  selectValue,
  incrementBy,
  selectError,
  clearError,
} from '../../../Store/counterSlice';
import './styles.css';
import { useEffect } from 'react';

export const First = () => {
  //value
  //counter
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const value = useSelector(selectValue);

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearError());
    }, 2000);
  }, [dispatch, error]);
  return (
    <div className="redux-component">
      <h3>First component</h3>
      <div className="redux-output">{value}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementBy(5))}>+5</button>
      <button onClick={() => dispatch(incrementBy(10))}>+10</button>
    </div>
  );
};
