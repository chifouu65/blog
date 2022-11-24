import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Blogs from "./pages/blog/Blogs";
import Login from "./pages/user/Login";
import Profile from "./pages/user/Profile";

function App() {
    const user = localStorage.getItem('user');
    const id = window.location.params.id;

    return (
        <>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" index element={<Home/>}/>
                    <Route path="/project" element={<Blogs/>}/>
                    <Route path="/blog" element={<Blogs/>}/>
                    <Route path={`/blog/${id}`} element={<Blogs/>}/>
                    <Route path={`/user`} element={<Login/>}/>
                    <Route path={`/profile`} element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
