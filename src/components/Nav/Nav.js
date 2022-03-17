import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AccountBox, ArrowDropDown, ArrowDropUp, Search } from '@material-ui/icons'

import logo from './Netflix_Logo_RGB.png'
import { UserContext } from '../../store/UserContext'
import './Nav.scss'

export default function Nav() {
    const [atTopLevel, setAtTopLevel] = useState(false) 
    const {user} = useContext(UserContext)

    window.onscroll = () => {
        setAtTopLevel(window.pageYOffset === 0 ? true : false)
        return () => (window.onscroll = null)
    }

    return (
        user ? (
            <nav className={atTopLevel ? "navbar" : "navbar scrolled"}>
                <div className="nav-container">
                    <LeftNav />
                    <RightNav />
                </div>
            </nav>
        ) : ''
    )
}

function LeftNav() {
    const itemList = [
        {name: 'Home', link: '/'},
        {name: 'TV Shows', link: '/tvshows'},
        {name: 'Movies', link: '/movies'},
        {name: 'My List', link: '/mylist'}
    ]

    return (
        <div className="nav-left">
            <Link to="/">
                <img src={logo} alt="Netflix Logo" className="logo"/>
            </Link>
            <div className="navigation">
                <ul className="navigation-large">
                    {itemList.map((elem, index) => (
                        <li key={index}>
                            <NavLink to={elem.link} className={({isActive}) => isActive ? 'active' : undefined}>
                                {elem.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="navigation-small">
                    <div>Browse</div>
                    <ArrowDropDown />
                    <div className="nav-small-expand">
                        <ArrowDropUp />
                        <ul className="nav-small-expand-content">
                            {itemList.map((elem, index) => (
                                <li key={index}>
                                    <NavLink to={elem.link} className={({isActive}) => isActive ? 'active' : undefined}>
                                        {elem.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RightNav() {
    const [searchClicked, setSearchClicked] = useState(false)
    const navigate = useNavigate()
    const {setSearchText, logout, user} = useContext(UserContext)

    async function handleOnClick() {
        await logout()
        navigate('/login')
    }

    return (
        <div className="nav-right">
            <div className={searchClicked ? "search-box-clicked" : "search-box"} >
                <Search className="search-icon" onClick={() => setSearchClicked(!searchClicked)} />
                <input 
                    type="text" 
                    className="search-bar"
                    placeholder="Search titles"
                    autoComplete="off"
                    autoFocus
                    onChange={e => {
                        setSearchText(e.target.value)    
                        navigate(`/search?q=${e.target.value}`)
                    }}
                />
            </div>
            <div className="account-box">
                <AccountBox className="profile"/>
                <ArrowDropDown className="arrow-down" />
                <div className="account-expand">
                    <ArrowDropUp className="arrow-up"/>
                    <div className="account-expand-content">
                        <div>Account: {user?.email}</div>
                        <div className='logout' onClick={handleOnClick}>Sign out of Netflix</div>
                    </div>
                </div>
            </div>
        </div>
    )
}