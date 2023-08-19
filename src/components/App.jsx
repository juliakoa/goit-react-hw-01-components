import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import FriendList from 'components/FriendList/FriendList';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
