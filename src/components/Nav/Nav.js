import logo from './Netflix_Logo_RGB.png';
import { useState } from 'react';
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
        <nav className={atTopLevel ? "navbar" : "navbar scrolled"}>
            <div className="nav-container">
                <LeftNav />
                <RightNav />
            </div>
        </nav>
    )
}

function LeftNav() {
    const itemList = (<>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>My List</li>
                    </>
    );

    return (
        <div className="nav-left">
            <img src={logo} alt="Netflix Logo" className="logo"/>
            {/* <Link to="/"><img src={logo} alt="Netflix Logo" className="logo"/></Link> */}
            <div className="navigation">
                <ul className="navigation-large">
                    {itemList}
                </ul>
                <div className="navigation-small">
                    <div>Browse</div>
                    <ArrowDropDown />
                    <div className="nav-small-expand">
                        <ArrowDropUp />
                        <ul className="nav-small-expand-content">
                            {itemList}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RightNav() {
    const [searchClicked, setSearchClicked] = useState(false);

    return (
        <div className="nav-right">
            <div className={searchClicked ? "search-box-clicked" : "search-box"}>
                <Search className="search-icon" onClick={() => setSearchClicked(!searchClicked)} />
                <input 
                    type="text" 
                    className="search-bar"
                    placeholder="Search titles" 
                    autoComplete="off" 
                    autoFocus 
                />
                </div>
            <div className="account-box">
                <AccountBox className="profile"/>
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
    );
}