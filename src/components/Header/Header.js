import React, { useState } from 'react';
import logo from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const [ error, setError ] = useState(null)
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(()=> {})
        .catch(error => setError(error))
    }

    return (
        <header className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <nav className="menu">
                <NavLink className={({ isActive }) => isActive ? 'active__link' : undefined} to="/">Shop</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active__link' : undefined} to="/orders">Order</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active__link' : undefined} to="/inventory">Inventory</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active__link' : undefined} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active__link' : undefined} to="/signup">Signup</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active__link' : undefined} to="/login">Login</NavLink>
                {
                    user?.uid
                    &&
                    <NavLink>{user.email}</NavLink> 
                }
                {
                user?.uid 
                && 
                <Link onClick={handleLogOut}>LogOut</Link>
                }
            </nav>
        </header>
    );
};

export default Header;