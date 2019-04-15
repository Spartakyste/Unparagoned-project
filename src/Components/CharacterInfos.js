import React from 'react';

const CharacterInfos = ({currentCharacter}) => {
    return ( 
        <div>
            <p>{currentCharacter.totalskill}</p>
            <p>{currentCharacter.questcomplete}</p>
            <p>{currentCharacter.activities[3].details}</p>
        </div>
     );
}
 
export default CharacterInfos;