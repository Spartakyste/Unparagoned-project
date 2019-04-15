import React from 'react';

const SearchBarItems = ({itemID, method}) => {

    return ( 
        <form onSubmit={method}>
          <label>
            Item:
            <input type="text" value="Type an item ID" onChange={itemID} />
          </label>
        <input type="submit" value="Submit" />
      </form>
     );
}
 
export default SearchBarItems;
