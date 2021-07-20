import React from 'react';
import propTypes from 'prop-types';
import styles from './Profile.module.css';


const Profile = ({ name, tag, location, avatar, stats }) => (
    <div className={styles.profile}>
    <div className={styles.description}>
    <img
      src={ avatar }
      alt="Аватар пользователя"
      className={styles.avatar}
    />
            <p className={styles.name}>{ name }</p>
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
    </div>)
Profile.defaultProps = {
    name: "noName",
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
    name: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
  stats: propTypes.shape(
    {
      followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired
    }
  )
}

export default Profile;