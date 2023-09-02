// import { useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { toggleProfile, selectProfile } from '../../../Store/storeTest';
import './styles.css';
import { incrementBy } from '../../../Store/counterSlice';
// import { store } from '../../../Store';

export const CardDetails = () => {
  const profile = useSelector(selectProfile);
  return (
    <div>
      CardDetails
      {profile === 'business' && <div>Company Logo</div>}
    </div>
  );
};

export const Accounts = () => {
  const profile = useSelector((state) => {
    console.log(state);
    return state?.testSlice?.userProfile.profile;
  });

  const dispatch = useDispatch();
  return (
    <div>
      Accounts
      <div>Current profile: {profile}</div>
      <button onClick={() => dispatch(toggleProfile())}>Change profile</button>
      <button onClick={() => dispatch(incrementBy(20))}>+20</button>
    </div>
  );
};

export const Cards = () => {
  return (
    <div>
      Cards <CardDetails />
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Accounts />
      <Cards />
    </div>
  );
};

export const ReduxTest = () => {
  // business, retail
  return (
    <div className="test-redux">
      Main Page
      <Dashboard />
    </div>
  );
};
