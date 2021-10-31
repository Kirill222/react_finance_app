import { useState } from 'react'
import s from './Signup.module.css'
import { useSignupFirebase } from '../../hooks/useSignupFirebase'

const Signup = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {error, isPending, signup} = useSignupFirebase()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }

    return (
        <form onSubmit={handleSubmit} className={s['signup-form']}> 
            <h2>Signup</h2>

            <label>
                <span>name:</span>
                <input
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>

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
            {!isPending && <button className="btn">Signup</button>}
            {isPending && <button className="btn" disabled>loading</button>}
            {error && <p>{error}</p>}
        </form>
    )
}

export default Signup