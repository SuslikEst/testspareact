import React from 'react';
import classes from './Header.module.css';

const Header = () => {

    return (
      <header className={classes.header}>
        <img 
        src="https://www.freepnglogos.com/uploads/google-chrome-logo-png-12.png" 
        alt="logo"
        className={classes.logo}
        />
      </header>
    );

}

export default Header;
