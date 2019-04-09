import React from 'react';

    const  ApiItems = ({ selectitem }) => {
        return (
            <div  className="ApiItems">
                <img height="190vh" width="150vw" src={selectitem.icon}  alt=""  />
                <ul>
                    <li>Holder{selectitem.id}</li>
                    <li>{selectitem.price}</li>
                </ul>
            </div>
        );
    };
    
    export  default  ApiItems;