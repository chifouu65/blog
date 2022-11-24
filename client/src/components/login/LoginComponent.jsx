import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        }
        axios.post('http://localhost:5000/auth/login', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        //save user in local storage
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            return
        }
        window.location.reload();
    }

    return (
        <>
            <h2>Login</h2>

            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />

                <button onClick={handleSubmit} type="submit">Login</button>
            </form>
        </>
    )
}

export default Login