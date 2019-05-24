import React from 'react';
import Timer from '../Timer';
import ApiItems from '../ApiItems';
import TileScoreboard from './TileScoreboard';
import TilePictures from './TilePictures';
import CharacterInfos from '../CharacterInfos';

const Tiles = ({currentItem, secondItem, thirdItem, currentCharacter}) => {

    return ( 
        <section className="columns" style={{margin: "1rem"}}>
            <article className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <TileScoreboard/>
                            {currentCharacter.length === 0 ? <div className="loader"></div> 
                            : <CharacterInfos className="is-5" currentCharacter={currentCharacter} />}
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <TilePictures/>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification itemsDisplay">
                    <div>
                        <Timer/>
                        {currentItem.length === 0 || secondItem.length === 0 || thirdItem.length === 0 
                        ? <div className="loader "></div> 
                        : <ApiItems currentItem={currentItem} secondItem = {secondItem} thirdItem={thirdItem} />}
                    </div>
                    </article>
                </div>
            </article>
        </section>
     );
}
 
export default Tiles;