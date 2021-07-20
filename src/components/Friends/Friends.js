import React from 'react';
import propTypes from 'prop-types';
import styles from './Friends.module.css';

const Friends = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map(friend => (
            <li className={styles.item} key={friend.id}>
                <span className={styles.status} style={
                    {
                        backgroundColor: friend.isOnline ? "green" : "red"
                    }
                }></span>
                <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
                <p className="name">{ friend.name }</p>
            </li>
        ))}
        
    </ul>
)
Friends.defaultProps = {
    friends: [
        {
            
            avatar: 'https://picsum.photos/200/300',
            name: 'no name',
            isOnline: false,
            id: 0
        }
    ]
}
Friends.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.exact(
            {
                
                avatar: propTypes.string.isRequired,
                name: propTypes.string.isRequired,
                isOnline: propTypes.bool.isRequired,
                id: propTypes.number.isRequired
            }
        )
    )
}

export default Friends