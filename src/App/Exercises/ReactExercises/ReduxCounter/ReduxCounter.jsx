import './styles.css';
import { First } from './First';
import { ReduxStealer } from './ReduxStealer';

export const ReduxCounter = () => {
  return (
    <div className="redux-container">
      Redux counter X
      <First />
      <ReduxStealer />
    </div>
  );
};
