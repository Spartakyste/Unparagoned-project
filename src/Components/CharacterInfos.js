import React from 'react';

const CharacterInfos = ({currentCharacter}) => {
    return ( 
        <div className=" clanMateInfo">
            <p className="title">{currentCharacter.name}</p>
            <p>Total levels : {currentCharacter.totalskill}</p>
            <p>Quests completed : {currentCharacter.questscomplete}</p>
            <ul>
                <li>{currentCharacter.activities[0].details}</li>
                <li>{currentCharacter.activities[1].details}</li>
                <li>{currentCharacter.activities[2].details}</li>
                <li>{currentCharacter.activities[3].details}</li>
            </ul>
        </div>
     );
}
 
export default CharacterInfos;