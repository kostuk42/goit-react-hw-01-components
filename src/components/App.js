import React from 'react';
import reactDom from 'react-dom';
import '../normalize.css';
import user from '../user.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from './Profile/Profile.js';
import statsData from '../statistical-data.json';
import Statistics from './Statistics/Statistics.js';
import Friends from './Friends/Friends.js';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory.js';




export default function App() {
    return (
        <>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
           />
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
        </>
    )

    
}