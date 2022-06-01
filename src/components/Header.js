import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='https://cdn-icons-png.flaticon.com/512/263/263142.png'
          //   src='https://static.vecteezy.com/system/resources/previews/006/060/047/original/black-icon-of-cart-isolated-on-white-background-shopping-cart-illustration-cart-symbol-icon-for-web-design-or-app-design-e-commerce-icon-free-vector.jpg'
          alt='e shopping cart'
        />
      </Link>

      <div className='header__search'>
        <input className='header__searchInput' placeholder='Search' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <div className='header__option'>
            <span className='header__optionLineOne'>
              Hello {user ? user.email : 'Guest'}
            </span>
            <span
              // onClick={handleAuth}
              className='header__optionLineTwo'
            >
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to='/checkout' style={{ textDecoration: 'none' }}>
          <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__optionLineTwo header__optionBasketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
