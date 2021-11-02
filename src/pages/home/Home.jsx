import s from './Home.module.css'
import TransactionForm from './TransactionForm'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import TransactionList from './TransactionList'


const Home = () => {

    const {user} = useAuthContext()
    const {documents, error} = useCollection(
                                            'transactions',
                                            ["userId", "==", user.uid],
                                            ["createdAt", "desc"]
                                            )

    console.log(user);

    return (
        <div className={s.container}>
            <div className={s.content}>
                {error && <p>{error}</p>}
                {documents &&  <TransactionList transactions={documents}/>}
            </div>
            <div className={s.sidebar}> 
                <TransactionForm userId={user.uid}/>
            </div>
        </div>
    )
}

export default Home