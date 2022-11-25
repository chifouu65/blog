import LoginComponent from "../../components/login/LoginComponent";
import RegisterComponents from "../../components/login/RegisterComponents";

const Login = () => {
    const user = localStorage.getItem('user')
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            {user ? 
           
            <h2>Vous etes deja connecté</h2>
        :
        <>
        <h1>Login / Register</h1>
        <LoginComponent/>
        <RegisterComponents/>
        </>
        }
        </div>
    );

}

export default Login;