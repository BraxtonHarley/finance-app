import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img 
                    className="header__logo" 
                    alt="header logo" 
                    src="data:image/jpeg;base64,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"/>
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="headerNav">
                
                {/* HOME PAGE */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Client</span>
                        <span  className="header__optionLineTwo">Home</span>
                    </div>           
                </Link>

                {/* COMMONTARY */}
                <Link to="/commontary" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">View</span>
                        <span className="header__optionLineTwo">Commontary</span>
                    </div>           
                </Link>

                {/* MAIN . HTML */}
                <Link to="/main" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">View</span>
                        <span className="header__optionLineTwo">Stocks</span>
                    </div>           
                </Link>
            </div>

        </nav>
    )
}

export default Header

