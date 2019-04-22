import React from 'react';

    const  ApiItems = ({currentItem, secondItem, thirdItem}) => {
        return (
            <div className="apiRendering">
                <div>
                    <img className="grow" height="190px" width="150px" src={currentItem.icon_large}  alt={currentItem.name}  />
                    <p style={{color: "rgb(210,105,30)"}}>{currentItem.name}</p>
                    <p>{currentItem.description}</p>
                    <p>Current G.E price : {currentItem.current.price}</p>
                    <p>The {currentItem.name} is : {currentItem.today.price} compared to yesterday.</p>
                </div>
                <div>
                    <img className="grow" height="190px" width="150px" src={secondItem.icon_large}  alt={secondItem.name}  />
                    <p style={{color: "rgb(210,105,30)"}}>{secondItem.name}</p>
                    <p>{secondItem.description}</p>
                    <p>Current G.E price : {secondItem.current.price}</p>
                    <p>The {secondItem.name} is : {secondItem.today.price} compared to yesterday.</p>
                <div>
                    <img className="grow" height="190px" width="150px" src={thirdItem.icon_large}  alt={thirdItem.name}  />
                    <p style={{color: "rgb(210,105,30)"}}>{thirdItem.name}</p>
                    <p>{thirdItem.description}</p>
                    <p>Current G.E price : {thirdItem.current.price}</p>
                    <p>The {thirdItem.name} is : {thirdItem.today.price} compared to yesterday.</p>
                </div>
            </div>
        </div>
        );
    };
    
    export  default  ApiItems;