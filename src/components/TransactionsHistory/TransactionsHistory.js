import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionsHistory.module.css';

const TransactionsHistory = ({ transactions }) => (
    <table className={styles.transactionsHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>      
  </thead>
    <tbody>
     {transactions.map(({id, type, amount, currency}) => (
        <tr key={id}>
         <td>{ type }</td>
         <td>{ amount }</td>
         <td>{ currency }</td>
        </tr>
            ))
     }
    </tbody>
 </table>    
)
TransactionsHistory.defaultProps = {
    id: "id-0",
    type: "no type",
    amount: "no amount",
    currency: "no currency"
}
TransactionsHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact(
            {
                id: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                amount: PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired
             }
         )
    )
}

export default TransactionsHistory




    
    
