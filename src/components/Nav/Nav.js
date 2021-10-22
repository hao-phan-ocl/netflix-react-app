import React, { useState } from 'react';
import logo from './Netflix_Logo_RGB.png';
import { Link } from 'react-router-dom';
import { AccountBox, ArrowDropDown, ArrowDropUp, Search } from '@material-ui/icons';
import './Nav.scss';

export default function Nav() {
    const [atTopLevel, setAtTopLevel] = useState(false);

    const [searchClicked, setSearchClicked] = useState(false);

    const itemList = (<>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>My List</li>
                    </>
    )
    
    window.onscroll = () => {
        setAtTopLevel(window.pageYOffset === 0 ? true : false)
        // return () => (window.onscroll = null);
    }

    if (searchClicked) {
        
    }

    return (
        <header>
            <div className={atTopLevel ? "navbar" : "navbar scrolled"}>
                <div className="nav-container">
                    <div className="nav-left">
                        <img src={logo} alt="Netflix Logo" className="logo"/>
                        {/* <Link to="/"><img src={logo} alt="Netflix Logo" className="logo"/></Link> */}
                        <div className="navigation">
                            <ul className="navigation-large">
                                {itemList}
                            </ul>
                            <ul className="navigation-small">
                                <li>Browse</li>
                                <ArrowDropDown />
                                <div className="nav-small-wrapper">
                                    <ArrowDropUp />
                                    <ul className="nav-small-wrapper-content">
                                         {itemList}
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-right">
                        <input 
                            type="text" 
                            className="search-bar" 
                            placeholder="Search titles" 
                            autoComplete="off" 
                            autoFocus 
                        />
                        <Search className="icon" onClick={() => setSearchClicked(!searchClicked)} />
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

