import React from "react";

import classes from './Converses.css';

const Converses = (props) => {
    return(
        <div className={classes.ConverseWrapper}>
            {props.converses}
        </div>
    );
}

export default Converses;