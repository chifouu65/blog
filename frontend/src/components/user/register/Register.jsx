import axios from "axios";
import {useState} from "react";


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {name, email, password};
        axios.post("http://localhost:3000/api/user/signup", user)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <div>
            <h1>Register</h1>
            <form style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}>
                <input type="text" placeholder="Name"
                       value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Email"
                       value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password"
                       value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit" onClick={handleSubmit}>Register</button>
            </form>
        </div>
    )
}

export default Register