import React from 'react';

    const  ApiItems = ({currentItem}) => {
        return (
            <div>
                <img height="190px" width="150px" src={currentItem.icon_large}  alt={currentItem.name}  />
                <p>{currentItem.name}</p>
                <p>{currentItem.description}</p>
                <p>{currentItem.current.price}</p>
            </div>
        );
    };
    
    export  default  ApiItems;