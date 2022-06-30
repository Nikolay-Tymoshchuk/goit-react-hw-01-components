// ================
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionsHistory/TransactionHistory';
import user from 'components/Profile/user';
import data from 'components/Statistics/data';
import friends from 'components/FriendList/friends';
import transactions from 'components/TransactionsHistory/transactions';
export const App = () => {
  return (
    <div
      className="container"
      style={{
        minHeight: '100vh',
        width: '938px',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: '20px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <TransactionHistory transactions={transactions} />
      <FriendList friends={friends} />
      <Statistics title="My storage statistics" stats={data} />
    </div>
  );
};
