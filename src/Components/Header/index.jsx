import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <header>
            <img src="/img/logoAluraFlix.png" alt="Logo AluraFlix" />
            <div>
                <NavLink to='/' className="button" activeClassName="active">Home</NavLink>
                <NavLink to='/NuevoVideo' className="button" activeClassName="active">Nuevo Video</NavLink>
            </div>
        </header>
    );
};

export default Header;