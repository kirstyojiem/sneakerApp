import React from "react";

import classes from './Jordans.css';

const Jordans = (props) => {
    return(
        <div className={classes.JordansWrapper}>
            {props.price}
        </div>
    );
}

export default Jordans;