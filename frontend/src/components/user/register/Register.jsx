import axios from "axios";
import {useState} from "react";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {email, password};
        const success = document.querySelector(".success");

        axios.post("http://localhost:3000/api/user/signup", user)
            .then(res => {
                setTimeout(() => {
                    window.location = "/login";
                }, 2000);
                success.innerHTML = res.data.message || res.data.error;
                success.style.display = "block";
                success.style.color = "green";
                res.status === 201 && console.log("User created");
            })
            .catch(err => {
                success.style.display = "block";
                success.style.color = "red";
                success.innerHTML = err;
                console.log("err");
            });
    }

    return (
        <div>
            <h1>Register</h1>
            <div className="success" style={{
                padding: "1rem",
                margin: "1rem 0",
                borderRadius: "5px",
                display: "none",
            }}>
            </div>

            <form style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}>
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