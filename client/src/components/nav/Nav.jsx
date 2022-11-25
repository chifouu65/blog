import {Link} from 'react-router-dom';
//use react-icon to add icons
import {FaHome, FaBlog, FaLink, FaPlus, FaMinus, FaUser, FaPowerOff} from 'react-icons/fa';
import "./nav.css";
import React, {useState} from "react";
import styled from 'styled-components';

const NavContainer = styled.nav`
display: flex;
flex-direction: column;
height: 100vh;
background: #f2f2f2;
width: 60px;
min-width: 60px;
transition: all 0.3s ease;
.text {
    display: none;
}
`
const LinkContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
display: flex;
height: 100%;
width: 100%;
overflow: hidden;
#user {
    min-height: 25%;
}
`
const LinkCard = styled(Link)`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
align-items: center;
justify-content: flex-start;
gap: 20px;
padding-left: 20px;
&:hover {
    background-color: #d4d4d4
}
`
const Bar = styled.div`
min-height: 1px;
width: 90%;
background-color: rgba(0,0,0,0.5);
content: "";
margin: 0 auto;
`
const BtnNav = styled.button`
padding: 20px;
font-size: 20px;
`

const Nav = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload()
    }
    const handleLogin = () => {
        if (user) {
            return (
                 <>
                 <Bar/>
                 <LinkCard id='user' to={"/profile"}>
                    <FaUser/>
                    {!click ? <span>Profile</span> : ""}
                </LinkCard>
                <Bar/>
                 <LinkCard id='user' onClick={handleLogout}>
                    <FaPowerOff/>
                    {!click ? <span>Déconnexion</span> : ""}
                 </LinkCard>
                 </>
            )
        } else {
            return (
                <>
                <Bar/>
                 <LinkCard id='user' to={'/user'}>
                    <FaPowerOff/>
                    {!click ? <span>Login /<br/>Register</span> : ""}
                 </LinkCard>
                </>
            )
        }
    }
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click)
    return (
        <>
        {
            click ? 
            <NavContainer>
            <LinkContainer>
                <BtnNav onClick={handleClick}>
                    {click ? <FaPlus/> : <FaMinus/>}
                </BtnNav>
                <Bar/>
                <LinkCard to="/">
                    <FaHome className="nav__icon"/>
                    <span className='text'>Home</span>
                </LinkCard>
                <LinkCard to="/blog">
                    <FaBlog className="nav__icon"/>
                    <span className='text'>Blog</span>
                </LinkCard>
                <LinkCard to={"/"}>
                    <FaLink className="nav__icon"/>
                    <span className='text'>About</span>
                </LinkCard>
                <LinkCard to={"/"}>
                    <FaLink className="nav__icon"/>
                    <span className='text'>Project</span>
                </LinkCard>
                <LinkCard to={"/"}>
                    <FaLink className="nav__icon"/>
                    <span className='text'>Contact</span>
                </LinkCard>
                {handleLogin()}
            </LinkContainer>
        </NavContainer>
        :
        <NavContainer style={{width: "200px", minWidth:'200px'}}>
            <LinkContainer>
                <BtnNav onClick={handleClick}>
                    {click ? <FaPlus/> : <FaMinus/>}
                </BtnNav>
                <Bar/>
                <LinkCard to="/">
                    <FaHome className="nav__icon"/>
                    <span>Home</span>
                </LinkCard>
                <LinkCard to="/blog">
                    <FaBlog className="nav__icon"/>
                    <span>Blog</span>
                </LinkCard>
                <LinkCard to={"/"}>
                    <FaLink className="nav__icon"/>
                    <span>About</span>
                </LinkCard>
                <LinkCard to={"/"}>
                    <FaLink className="nav__icon"/>
                    <span >Project</span>
                </LinkCard>
                <LinkCard to={"/"}>
                    <FaLink className="nav__icon"/>
                    <span >Contact</span>
                </LinkCard>
                {handleLogin()}
            </LinkContainer>
        </NavContainer>
        }
        </>
    );
}

export default Nav;