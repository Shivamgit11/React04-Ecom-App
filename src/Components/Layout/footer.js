import React from "react";
import classes from './footer.module.css';

const Footer = () => {
    return(
        <footer className={classes.footer}>
            <span>The Generics</span>
            <span>youtube</span>
            <span>Facebook</span>
            <span>instagran</span>
        </footer>
    )
}

export default Footer;