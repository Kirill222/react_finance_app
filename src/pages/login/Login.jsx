import s from './Login.module.css'
import { useState } from 'react'
import { useLoginFirebase } from '../../hooks/useLoginFirebase'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login, error, isPending} = useLoginFirebase()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className={s['login-form']}> 
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>

            <label>
                <span>password:</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            {!isPending && <button className="btn">Login</button>}
            {isPending && <button disabled className="btn">loading</button>}
            {error && <p>{error}</p>}
        </form>
    )
}

export default Login