import {Link} from 'react-router-dom';
//use react-icon to add icons
import {FaHome, FaBlog, FaLink, FaArrowLeft, FaPowerOff, FaPen, FaUser, FaArrowRight} from 'react-icons/fa';
import "./nav.css";
import React, {useState} from "react";

const Nav = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const handleLogout = () => {
        localStorage.removeItem('user');
    }
    const handleLogin = () => {
        if (user) {
            return (
                <div className='profile__container'>
                    <button className='nav__link'><Link className='nav__link' to='/profile'>
                        <FaUser/><span className='text'>{user.email}</span></Link></button>
                    <button className='nav__link'>
                        <FaPen/><span className='text'>Post</span></button>
                    <button className='nav__link' onClick={handleLogout}><
                        FaPowerOff/><span className='text'>Déconnexion</span></button>
                </div>
            )
        } else {
            return (
                <>
                    <Link to="/user">Register/Login</Link>
                </>
            )
        }
    }

    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    setTimeout(() => {
        if (click === false) {
            document.querySelector('.nav').style.width = '60px';
            document.querySelectorAll(".text").forEach((text) => {
                text.style.display = 'none';
            })
        } else {
            document.querySelector('.nav').style.width = '200px';
            document.querySelectorAll(".text").forEach((text) => {
                text.style.display = 'block';
            })
        }
    }, 100);

    return (
        <nav className="nav">
            <ul className="nav__list">
                <button onClick={handleClick}>
                    {click ? <FaArrowLeft/> : <FaArrowRight/>}
                </button>
                <Link to="/" className="nav__link">
                    <FaHome className="nav__icon"/>
                    <span className='text'>Home</span>
                </Link>
                <Link to="/blog" className="nav__link">
                    <FaBlog className="nav__icon"/>
                    <span className='text'>Blog</span>
                </Link>
                <Link to={"/"} className="nav__link">
                    <FaLink className="nav__icon"/>
                    <span className='text'>About</span>
                </Link>
                <Link to={"/"} className="nav__link">
                    <FaLink className="nav__icon"/>
                    <span className='text'>Project</span>
                </Link>
                <Link to={"/"} className="nav__link">
                    <FaLink className="nav__icon"/>
                    <span className='text'>Contact</span>
                </Link>
            </ul>
            <div className="nav__list">
                {handleLogin()}
            </div>
        </nav>
    );
}

export default Nav;