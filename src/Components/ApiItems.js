import React from 'react';

    const  ApiItems = ({currentItem, secondItem, thirdItem}) => {
        return (
            <div className="apiRendering">
                <div>
                    <img height="190px" width="150px" src={currentItem.icon_large}  alt={currentItem.name}  />
                    <p>{currentItem.name}</p>
                    <p>{currentItem.description}</p>
                    <p>Current G.E price : {currentItem.current.price}</p>
                </div>
                <div>
                    <img height="190px" width="150px" src={secondItem.icon_large}  alt={secondItem.name}  />
                    <p>{secondItem.name}</p>
                    <p>{secondItem.description}</p>
                    <p>Current G.E price : {secondItem.current.price}</p>
                <div>
                    <img height="190px" width="150px" src={thirdItem.icon_large}  alt={thirdItem.name}  />
                    <p>{thirdItem.name}</p>
                    <p>{thirdItem.description}</p>
                    <p>Current G.E price : {thirdItem.current.price}</p>
                </div>
            </div>
        </div>
        );
    };
    
    export  default  ApiItems;