import styles from './Home.module.css'


function TransactionList({transactions}) {
    return (
        <ul className={styles.transactions}>
           {transactions.map(t => (
               <li key={t.id}>
                   <p className={styles.name}>{t.name}</p>
                   <p className={styles.amount}>${t.amount}</p>
               </li>
           ))} 
        </ul>
    )
}

export default TransactionList
