import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav style={
            {
                gap: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
                backgroundColor: "lightblue"
            }
        }>
            {/* default */}
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>

            {/* No connected */}
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            {/* connected */}
            <Link to='/posts'>Posts</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/logout'>Logout</Link>
            {/* if is Admin */}
            <Link to='/admin'>Admin</Link>
        </nav>
    )
}

export default Nav