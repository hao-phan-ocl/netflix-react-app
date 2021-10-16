import React from 'react';
import logo from '../Netflix_Logo_RGB.png';
import { Link } from 'react-router-dom';
import { AccountBox, ArrowDropDown, ArrowDropUp, Search } from '@material-ui/icons';

export default function Nav() {
    return (
        <header>
            <div className="navbar fixed-top navbar-dark bg-dark">
                <div className="container-md">
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
                        {/* <input className="form-control me-2 input-sm" type="text" placeholder="Search" /> */}
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
        jj
    )
}

