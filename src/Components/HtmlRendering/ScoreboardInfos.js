import React from 'react';

const ScoreboardInfos = ({characters}) => {
    return ( 
        <nav className="level is-mobile" style={{marginTop : "1rem"}}>
            <div className="level-item is-mobile has-text-centered">
                <div>
                    <p className="heading">Competitions</p>
                    {/* Bind that to the current competition index from MySQL */}
                    <p className="title">#1</p>
                </div>
            </div>
            <div className="level-item is-mobile has-text-centered">
                <div>
                    <p className="heading">Running time</p>
                    {/* Add a <p> and display a counter who start when we create a competition */}
                    <p className="title">~</p>
                </div>
            </div>
            {/* Link that to the numbers of columns received drom mySQL */}
            <div className="level-item is-mobile has-text-centered">
                <div>
                    <p className="heading">Number of players</p>
                    <p className="title">{characters.length}</p>
                </div>
            </div>
        </nav>
     );
}
 
export default ScoreboardInfos;