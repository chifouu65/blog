import LoginComponent from "../../components/login/LoginComponent";
import RegisterComponents from "../../components/login/RegisterComponents";

const Login = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <h1>Login / Register</h1>
            <LoginComponent/>
            <RegisterComponents/>
        </div>
    );

}

export default Login;