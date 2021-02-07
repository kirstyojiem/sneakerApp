import React from 'react';
import Jumpman_logo from "/Users/kirstyojiem/Downloads/sneaker-api-app-main/src/assets/images/Jumpman_logo.png";
import Reebok_logo from "/Users/kirstyojiem/Downloads/sneaker-api-app-main/src/assets/images/reebok.png"; 

import classes from './SneakerImage.module.css';

const sneakerImage = (props) => {
    console.log(props)
    
    let imageUrl = props.image.smallImageUrl; 
    let title = props.title;
    if(imageUrl.indexOf("Product-Placeholder-Default") > -1 || imageUrl == null) {
        if (title.indexOf("Jordan") > -1 ) {
            console.log(imageUrl.indexOf("Jordan") )
            imageUrl = Jumpman_logo;
        } else {
            imageUrl = Reebok_logo;    
        }
    }

    return(
        <div className={classes.SneakerImageWrapper}>
            <img src={imageUrl} className={classes.Image}  alt=" of the trainer"/>
        </div>
    );
}

export default sneakerImage;