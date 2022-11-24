import React from 'react';
import {Link} from "react-router-dom";

const Profile = () => {
    const auth = localStorage.getItem('user');
    const user = JSON.parse(auth);

    return (
        <>
            { user ?
                <div>
                    <h1>Profile</h1>
                    <h2>Email: {user.email}</h2>
                    <h2>Password: {user.password}</h2>

                    <button>Change password</button>
                </div>
                :
                <div>
                    <h1>Profile</h1>
                    <Link to='/user'>Connect&é vous</Link>
                </div>
            }
        </>
    )
}

export default Profile;