import React from 'react';

const CurrentCompetition = ({currentSkill}) => {
    return ( 
        <article className="container has-text-centered">
        {/* Lorem ipsum replaced with the choose skill from the modal */}
            The current competition runnning is : {currentSkill}.
        </article>
     );
}
 
export default CurrentCompetition;
