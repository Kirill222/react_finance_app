import s from './Navbar.module.css'
import { useLogoutFirebase } from '../hooks/useLogoutFirebase'
import { useAuthContext } from '../hooks/useAuthContext'
import { AuthContext } from '../context/AuthContext'
import {Link} from 'react-router-dom'

const Navbar = () => {


    const { logout } = useLogoutFirebase()

    const {user} = useAuthContext()

    return (
        <nav className={s.navbar}>
            <ul>
                <li className={s.title}>myMoney</li>


                {!user && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}
                

                {user && (
                    <>
                        <li>Hello, {user.displayName}</li>
                        <li>
                            <button className="btn" onClick={logout}>Logout</button>
                        </li>
                    </>
                )}
                
            </ul>
        </nav>
    )
}

export default Navbar