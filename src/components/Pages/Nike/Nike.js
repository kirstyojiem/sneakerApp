import React from 'react';
import price from '../../SneakerDetails/Price/Price';

import classes from './Nike.css';

const Nike = (props) => {
    return(
        <div className={classes.NikeWrapper}>
            {props.Nike}
        </div>
    );
}

export default Nike;