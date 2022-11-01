import React, { Fragment } from "react";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
            
            <span>HOME</span>
            <span>STORE</span>
            <span>ABOUT</span>
            
            <button className={classes.button} onClick={props.onShowCart}>CART</button>
        </header>
        <h1 className={classes.h1}> The Generics </h1>
        <section>
            <h1 className={classes.music}>Music</h1>
        </section>
        
        </Fragment>
    )
}

export default Header;