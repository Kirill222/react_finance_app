import s from './Home.module.css'
import TransactionForm from './TransactionForm'
import {useAuthContext} from '../../hooks/useAuthContext'

const Home = () => {

    const {user} = useAuthContext()

    console.log(user);

    return (
        <div className={s.container}>
            <div className={s.content}>
                transaction list
            </div>
            <div className={s.sidebar}> 
                <TransactionForm userId={user.uid}/>
            </div>
        </div>
    )
}

export default Home