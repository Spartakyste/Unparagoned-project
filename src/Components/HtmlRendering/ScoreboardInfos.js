import React from 'react';

const ScoreboardInfos = () => {
    return ( 
        <nav className="level is-mobile" style={{marginTop : "1rem"}}>
            <div className="level-item is-mobile has-text-centered">
                <div>
                    <p className="heading">Competitions</p>
                    <p className="title">#17</p>
                </div>
            </div>
            <div className="level-item is-mobile has-text-centered">
                <div>
                    <p className="heading">Following</p>
                    <p className="title">123</p>
                </div>
            </div>
            <div className="level-item is-mobile has-text-centered">
                <div>
                    <p className="heading">Followers</p>
                    <p className="title">456K</p>
                </div>
            </div>
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