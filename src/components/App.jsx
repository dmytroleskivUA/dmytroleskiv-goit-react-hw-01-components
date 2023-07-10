import { Profile } from './profile/Profile';
import user from '../data/user.json';

import { Statistics } from './statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from './friendList/FriendList';
import transactions from '../data/transactions.json';

import { TransactionHistory } from './transactionHistory/TransactionHistory';
import friends from '../data/friends.json';

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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
