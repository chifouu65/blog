import axios from 'axios';
import React, { useState } from 'react';

const RegisterComponents = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            email,
            password
        }
        axios.post('http://localhost:5000/auth/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <h2>Register</h2>

            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />

                <button onClick={handleSubmit} type="submit">Register</button>
            </form>
        </>
    )
}

export default RegisterComponents
