import React from 'react';

const ItemButton = ({item}) => {
    return(
        <div>
            <button onClick={item}>Load the item</button>
        </div>
    )
}

export default ItemButton;