import React from 'react';
import styles from "../FriendListItem/FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = (friend) => {
    const {isOnline, avatar, name} = friend
    return (
        <li className={styles.item}>
                <span className={styles.status} style={
                    {
                        backgroundColor: isOnline ? "green" : "red"
                    }
                }> </span>
            <img className={styles.avatar} src={avatar} alt="" width="48"/>
            <p className="name">{name}</p>
        </li>
    );
};

FriendListItem.defaultProps = {
    avatar: "https://picsum.photos/200/300",
    name: "noName",
    isOnline: false
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired

}

export default FriendListItem;
