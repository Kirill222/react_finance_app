import { useState } from 'react'
import s from './Signup.module.css'

const Signup = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(displayName, email, password)
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
            <button className="btn">Signup</button>
        </form>
    )
}

export default Signup