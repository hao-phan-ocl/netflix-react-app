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

    return (
        <header>
            <div className={atTopLevel ? "navbar fixed-top px-5" : "navbar fixed-top bg-black px-5"}>
                <div className="container-fluid">
                    <div className="nav-left">
                        <Link to="/"><img src={logo} alt="Netflix Logo" className="logo"/></Link>
                        <ul className="nav-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/tvshows">TV Shows</Link>
                            </li>
                            <li>
                                <Link to="/movies">Movies</Link>
                            </li>
                            <li>
                                <Link to="/mylist">My List</Link>
                            </li>
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

