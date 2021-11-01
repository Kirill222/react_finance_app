import s from './Navbar.module.css'
import { useLogoutFirebase } from '../hooks/useLogoutFirebase'

import {Link} from 'react-router-dom'

const Navbar = () => {


    const { logout } = useLogoutFirebase()


    return (
        <nav className={s.navbar}>
            <ul>
                <li className={s.title}>myMoney</li>

                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>

                <li>
                    <button className="btn" onClick={logout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar