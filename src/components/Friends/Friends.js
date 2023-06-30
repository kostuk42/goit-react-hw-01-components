import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';
import FriendListItem from "../FriendListItem/FriendListItem";

const Friends = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map(friend =><FriendListItem key={friend.id} {...friend} />)}
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
    friends: PropTypes.arrayOf(
        PropTypes.exact(
            {
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                isOnline: PropTypes.bool.isRequired,
                id: PropTypes.number.isRequired
            }
        )
    )
}

export default Friends
