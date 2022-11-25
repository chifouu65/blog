import {Link} from 'react-router-dom';
//use react-icon to add icons
import {FaHome, FaBlog, FaLink, FaArrowLeft} from 'react-icons/fa';
import "./nav.css";

const Nav = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogin = () => {
        if (user) {
            return (
                <>
                    <Link to="/profile">{user ? user.email : "Pas connecté"}</Link>
                </>
            )
        } else {
            return (
                <>
                    <Link to="/user">Register/Login</Link>
                </>
            )
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }
    return (
        <nav className="nav">
            <ul className="nav__list">
                <button>
                    <FaArrowLeft/>
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

            <div className="profile__container">
                <li className='profile__item'>
                    <span className='text'>
                        {handleLogin()}
                    </span>
                </li>

            </div>

        </nav>
    );
}

export default Nav;