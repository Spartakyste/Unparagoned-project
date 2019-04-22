import React from 'react';
import Timer from '../Timer';
import ApiItems from '../ApiItems';
import TileScoreboard from './TileScoreboard';
import TilePictures from './TilePictures';

const Tiles = ({currentItem, secondItem, thirdItem, currentCharacter}) => {
    return ( 
        <section className="columns" style={{margin: "1rem"}}>
            <article className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <TileScoreboard currentCharacter={currentCharacter}/>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <TilePictures/>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification">
                    <div>
                        <Timer/>
                        
                        {currentItem.length === 0 || secondItem.length === 0 || thirdItem.length === 0 
                        ? <p>Wait for it</p> 
                        : <ApiItems currentItem={currentItem} secondItem = {secondItem} thirdItem={thirdItem} />}
                    </div>
                    </article>
                </div>
            </article>
        </section>
     );
}
 
export default Tiles;