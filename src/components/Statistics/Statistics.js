import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({title, statsData}) => (

    <section className={styles.statistics}>
        {title && (<h2 className={styles.title}>{ title }</h2>)}
  
        <ul className={styles.statList}>
            {statsData.map(stat => (<li key={stat.id} className={styles.statsItem} style={
                {backgroundColor: "#" + Math.round(Math.random()*65535).toString(16)}
                }>
                <span className={styles.label}>{stat.label}</span>
                <span className={styles.percentage}>{ stat.percentage }</span>
            </li>))}
  </ul>
</section>
)
Statistics.defaultProps = {
    statsData: [
        {
            id: "id-0",
            label: "no label",
            percentage: 0
        }
    ]
}
Statistics.propTypes = {
    title: propTypes.string,
    statsData: propTypes.arrayOf(
        propTypes.exact(
            {
               id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired 
            }
        )
    )
}

export default Statistics;