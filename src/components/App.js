import React from 'react';
import '../normalize.css';
import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './Profile/Profile.js';
import statsData from '../data/statistical-data.json';
import Statistics from './Statistics/Statistics.js';
import Friends from './Friends/Friends.js';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory.js';
import './App.css';

export default function App() {

    return (
        <div className="App">
            <Profile {...user}/>
            <Statistics
                title="upload stats"
                statsData={statsData}
            />
            <Friends
                friends={friends}
            />
            <TransactionsHistory
                transactions ={transactions}
            />
        </div>
    )

    
}
