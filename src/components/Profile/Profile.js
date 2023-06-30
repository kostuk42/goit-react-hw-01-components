import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';


const Profile = ( {username, tag, location, avatar, stats} ) => {
    console.log(username, tag, location, avatar, stats)
    return (
    <div className={styles.profile}>
    <div className={styles.description}>
    <img
      src={ avatar }
      alt="Аватар пользователя"
      className={styles.avatar}
    />
            <p className={styles.name}>{ username }</p>
            <p className={styles.tag}>{ tag }</p>
            <p className={styles.location}>{ location }</p>
  </div>

    <ul className={styles.stats}>
    <li className={styles.statItem}>
      <span className="label">Followers</span>
                <span className={styles.quantity}>{ stats.followers }</span>
    </li>
    <li className={styles.statItem}>
      <span className="label">Views</span>
                <span className={styles.quantity}>{ stats.views }</span>
    </li>
    <li className={styles.statItem}>
      <span className="label">Likes</span>
                <span className={styles.quantity}>{ stats.likes }</span>
    </li>
  </ul>
    </div>)}
Profile.defaultProps = {
    username: "noName",
    tag: "noTag",
    location: "Earth",
    avatar: "https://picsum.photos/200/300",
    stats: {
        followers: 0,
        views: 0,
        likes: 0
    }
}
    
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape(
    {
      followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }
  )
}

export default Profile;
