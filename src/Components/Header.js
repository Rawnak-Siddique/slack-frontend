import { Avatar } from '@material-ui/core';
import React from 'react';
import './Header.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';


function Header() {
    const [{ user }] = useStateValue();
    return (
        <div className="header" >
            <div className="header__left">
                {/* avatar for user*/}
                <Avatar className="header__avatar"
                src={user?.photoURL}
                alt={user?.displayName} />
                {/* time icon */}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
             {   /* search icon */}
                <SearchIcon />
               { /* input */}
               <input placeholder="Search for" />
            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header;