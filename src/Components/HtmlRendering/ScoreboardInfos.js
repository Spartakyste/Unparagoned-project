import React from 'react';

const ScoreboardInfos = () => {
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
                    <p className="heading">Current number of players</p>
                    {/* Link that to the numbers of columns received drom mySQL */}
                    <p className="title">2</p>
                </div>
            </div>
            {/* Debating if keeping it, means implementing a like button somewhere and keep count */}
            <div className="level-item is-mobile has-text-centered">
                <div>
                    <p className="heading">Likes</p>
                    <p className="title">789</p>
                </div>
            </div>
        </nav>
     );
}
 
export default ScoreboardInfos;