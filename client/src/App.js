import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Blogs from "./pages/blog/Blogs";
import Login from "./pages/user/Login";
import Profile from "./pages/user/Profile";
import Blog from "./pages/blog/Blog";
import Post from './pages/user/Post';
function App() {
    return (
        <>
            <BrowserRouter>
                <Nav/>
                <main style={{paddingLeft: "60px"}}>
                <Routes>
                    <Route path="/" index element={<Home/>}/>
                    <Route path="/project" element={<Blogs/>}/>
                    <Route path="/blog" element={<Blogs/>}/>
                    <Route path="/blog/:id" element={<Blog/>}/>
                    <Route path={`/user`} element={<Login/>}/>
                    <Route path={`/profile`} element={<Profile/>}/>
                    <Route path='/post' element={<Post/>}/>
                </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
