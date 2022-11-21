import React, {useState} from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {email, password};
        axios.post("http://localhost:3000/api/user/login", user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                error.response && console.log(error.response.data);
                console.log(error)

            });
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}>
                <input type="email" placeholder="Email"
                       value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Login