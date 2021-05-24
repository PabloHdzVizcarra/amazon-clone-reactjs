import React from 'react';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';


Header.propTypes = {};

function Header() {
  return (
      <div className="header">
        <img
            className="header__logo"
            src="https://img.icons8.com/color/48/000000/amazon.png"
            alt="amazon logo"
        />
        <div className="header__search">
          <input type="text" className="header__searchInput"/>
          <SearchIcon className="header__searchIcon"/>
        </div>
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>
      </div>
  );
}

export default Header;
