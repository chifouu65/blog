import React from "react";

function Login() {
    return (
        <div className="login">
            <h1>Login</h1>

            <form style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" />

                <button onClick={''} type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login