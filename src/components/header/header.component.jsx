import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container img' to="/">
            <img src="https://i.ibb.co/GczwfNr/logo.png" />
        </Link>
        <div className="options">
            <Link className="option" to="/fragancesmen">
                Perfumes Hombre
            </Link>
            <Link className="option" to="/fraganceswoman">
                Perfumes Mujer
            </Link>
            <Link className="option" to="/fragancesunisex">
                Perfumes Unisex
            </Link>
        </div>    
    </div>
    

);


export default Header;