import React from "react";

import classes from './HomePage.css'

const HomePage = (props) => {
    return(
        <div className={classes.HomePageWrapper}>
            {props.HomePage}
        </div>
    );
}

export default HomePage;