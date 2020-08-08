import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import '../style/Header.css';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/login">
        <img 
          className="header_logo" 
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo Amazon"
        />
      </Link>
      <div className="header_search">
        <input
          type="text"
          className="header_searchInput"
        />
        <SearchIcon className="header_searchIcon"/>
      </div>

      <div className="header_nav">
        <Link to="" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello will</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne" >Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_Basket ">
            <ShoppingBasketIcon/>
            <span className="header_optionLineTwo header_BasketCount">0</span>
          </div>
        </Link>
      </div>
 
    </nav>
  );
}

export default Header;
