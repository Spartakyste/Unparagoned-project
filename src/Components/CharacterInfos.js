import React, { useState } from 'react';
import {RadialChart} from 'react-vis';

const CharacterInfos = ({currentCharacter}) => {

    const [showInfos, useShowInfos] = useState(false);

    const myData = [{angle: currentCharacter.skillvalues[0].xp}, {angle: currentCharacter.skillvalues[1].xp},
                    {angle: currentCharacter.skillvalues[2].xp}, {angle: currentCharacter.skillvalues[3].xp}, 
                    {angle: currentCharacter.skillvalues[4].xp}];

    const factoringNumbers = (number) => {
        const firstFactoring = number.toFixed(number.length).slice(0, -1);
        if (firstFactoring.length === 9){
        const secondFactoring = firstFactoring.slice(0, 3) + "." + firstFactoring.slice(3, 6) + "." + firstFactoring.slice(6, 9)
        return secondFactoring;
        }
        if (firstFactoring.length === 8){
        const secondFactoring = firstFactoring.slice(0, 2) + "." + firstFactoring.slice(2, 5) + "." + firstFactoring.slice(5, 8)
        return secondFactoring;
        }
        if (firstFactoring.length === 7){
        const secondFactoring = firstFactoring.slice(0, 1) + "." + firstFactoring.slice(1, 4) + "." + firstFactoring.slice(4, 7)
        return secondFactoring;
        }
        if (firstFactoring.length === 6){
        const secondFactoring = firstFactoring.slice(0, 3) + "." + firstFactoring.slice(3, 6)
        return secondFactoring;
        }
        if (firstFactoring.length === 5){
        const secondFactoring = firstFactoring.slice(0, 2) + "." + firstFactoring.slice(2, 5)
        return secondFactoring;
        }
    }
     
    const convertSkill = (number) => {
        switch(number){
            case(26) : number = "Invention";
            break;
            case(6) : number = "Magic";
            break;
            case(3) : number = "Constitution";
            break;
            case(18) : number = "Slayer"
            break;
            case(4) : number = "Ranged"
            break;
            case(0) : number = "Attack"
            break;
            case(14) : number = "Mining"
            break;
            case(24) : number = "Dungeonnering"
            break;
            case(1) : number = "Defence"
            break;
            case(15) : number = "Herblore"
            break;
            case(23) : number = "Summoning"
            break;
            case(10) : number = "Fishing"
            break;
            case(8) : number = "Woodcutting"
            break;
            case(19) : number = "Farming"
            break;
            case(7) : number = "Cooking"
            break;
            case(11) : number = "Firemaking"
            break;
            case(17) : number = "Thieving"
            break;
            case(2) : number = "Strength"
            break;
            case(12) : number = "Crafting"
            break;
            case(9) : number = "Fletching"
            break;
            case(22) : number = "Construction"
            break;
            case(21) : number =  "Hunter"
            break;
            case(13) : number = "Smithing"
            break;
            case(5) : number = "Prayer"
            break;
            case(16) : number = "Agility"
            break;
            case(25) : number = "Divination"
            break;
            case(20) : number = "Runecrafting"
            break;
            default:
        }
        return number;
    }

    return ( 
        <div className="clanMateInfo">
            <p className="title">{currentCharacter.name}</p>
            <p style={{color: "red"}}>Total levels : {currentCharacter.totalskill}</p>
            <p style={{color: "blue"}} >Quests completed : {currentCharacter.questscomplete}</p>
            <ul>
                <li>{currentCharacter.activities[0].details}</li>
                <li>{currentCharacter.activities[1].details}</li>
                <li>{currentCharacter.activities[2].details}</li>
                <li>{currentCharacter.activities[3].details}</li>
            </ul>
            {!showInfos && <a onClick={() => useShowInfos(true)} className="button is-small buttonShow">
                <span className="buttonText">Get {showInfos ? "less" : "more"} informations about the best skills 
                                             of {currentCharacter.name}</span></a>}
            {showInfos &&
            <div className="">
                <div className="levelsDisplay levelsDisplayInfos">
                    The informations are represented in the graphic in the middle,
                    skills are displayed clockwise
                </div>
                <div className="radial">
                    <RadialChart data={myData} width={300} height={300} />
                </div>
                <ul className="levelsDisplay levelsDisplayCss">
                    <li>{convertSkill(currentCharacter.skillvalues[0].id)}  level : {currentCharacter.skillvalues[0].level},
                     total xp : {factoringNumbers(currentCharacter.skillvalues[0].xp)}</li>
                    <li>{convertSkill(currentCharacter.skillvalues[1].id)} level : {currentCharacter.skillvalues[1].level},
                     total xp :  {factoringNumbers(currentCharacter.skillvalues[1].xp)}</li>
                    <li>{convertSkill(currentCharacter.skillvalues[2].id)} level : {currentCharacter.skillvalues[2].level},
                     total xp :  {factoringNumbers(currentCharacter.skillvalues[2].xp)}</li>
                    <li>{convertSkill(currentCharacter.skillvalues[3].id)} level : {currentCharacter.skillvalues[3].level},
                     total xp :  {factoringNumbers(currentCharacter.skillvalues[3].xp)}</li>
                    <li>{convertSkill(currentCharacter.skillvalues[4].id)} level : {currentCharacter.skillvalues[4].level},
                     total xp :  {factoringNumbers(currentCharacter.skillvalues[4].xp)}</li>
                </ul>
                <a onClick={() => useShowInfos(false)} className="button is-small buttonShow">
                <span className="buttonText">Get {showInfos ? "less" : "more"} informations about the best skills of
                 {currentCharacter.name}</span></a>
            </div>}
        </div>
     );
}
 
export default CharacterInfos;