import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";
import FriendList from "./components/FriendList/FriendList";

import friends from "./friends.json";

function App() {
  return (
    <>
      <div>
        <h2>Task 1</h2>
        <Profile
          key={userData.tag}
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div>
        <h2>Task 2</h2>
        <TransactionHistory items={transactions} />
      </div>
      <div>
        <h2>Task 3</h2>
        <FriendList friends={friends} />
      </div>
    </>
  );
}

export default App;
