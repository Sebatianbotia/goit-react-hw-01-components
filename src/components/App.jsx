import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";

import user from "../path/user.json";
import data from "../path/data.json";
import friends from "../path/friends.json";
import transactions from "../path/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};