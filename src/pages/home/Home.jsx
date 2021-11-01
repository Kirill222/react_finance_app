import s from './Home.module.css'
import TransactionForm from './TransactionForm'

const Home = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                transaction list
            </div>
            <div className={s.sidebar}> 
                <TransactionForm />
            </div>
        </div>
    )
}

export default Home