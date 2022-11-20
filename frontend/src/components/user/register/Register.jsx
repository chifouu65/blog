
function Register() {
    return (
        <div>
            <h1>Register</h1>
            <form style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register