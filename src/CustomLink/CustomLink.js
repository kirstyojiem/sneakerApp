import React, { Component } from 'react' ;

export default CustomLink = ({children, to, exact}) => {
    const match = window.location.pathname === to;

    return (
    <div className={match ? 'active' : ''}>
        {match ? '> ' : ''}
        <Link to={to}>
            {children}     </Link>  </div>)
}