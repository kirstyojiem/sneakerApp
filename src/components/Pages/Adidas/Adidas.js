import React from "react";

import classes from './Adidas.css';

const Adidas = (props) => {
    return(
        <div className={classes.AdidasWrapper}>
            {props.Adidas}
        </div>
    );
}

export default Adidas;