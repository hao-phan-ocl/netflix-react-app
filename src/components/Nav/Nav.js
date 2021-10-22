import React, { useState } from 'react';
import logo from './Netflix_Logo_RGB.png';
import { Link } from 'react-router-dom';
import { AccountBox, ArrowDropDown, ArrowDropUp, Search } from '@material-ui/icons';
import './Nav.scss';

export default function Nav() {
    const [atTopLevel, setAtTopLevel] = useState(false);
    
    window.onscroll = () => {
        setAtTopLevel(window.pageYOffset === 0 ? true : false)
        // return () => (window.onscroll = null);
    }

    const navItems = [
        {category: 'Home', link: '/'},
        {category: 'TV Shows', link: '/tvshows'},
        {category: 'Movies', link: '/movies'},
        {category: 'My List', link: '/mylist'}
    ];

    return (
        <header>
            <div className={atTopLevel ? "navbar" : "navbar scrolled"}>
                <div className="nav-container">
                    <div className="nav-left">
                        <img src={logo} alt="Netflix Logo" className="logo"/>
                        {/* <Link to="/"><img src={logo} alt="Netflix Logo" className="logo"/></Link> */}
                        <ul className="nav-links">
                            {navItems.map(item => (
                                // <Link to={item.link} key={item.category}>
                                    <li>{item.category}</li>
                                // </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="nav-right">
                        <Search className="icon" />
                        <div className="account-box">
                            <AccountBox />
                            <ArrowDropDown className="arrow-down" />
                            <div className="account-expand">
                                <ArrowDropUp className="arrow-up"/>
                                <div className="account-expand-content">
                                    <div>Account</div>
                                    <div>Sign out of Netflix</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

