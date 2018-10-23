import React from 'react';

//Stateless Component. No need to do state related activities
export const Header = (props) => {
    console.log(props);
    return(
        <div className="header">
            <h1>{props.linkName}</h1>
        </div>
    )
};