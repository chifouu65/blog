import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Nav from "./components/nav/Nav";
import Blog from "./components/blog/Blog";
//user
import Login from "./components/user/login/Login";
import Register from "./components/user/register/Register";
import User from './components/user/User';

function App() {
    return (
        <>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="*" element={<h1>404 Not Found</h1>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/profile' element={<User/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
