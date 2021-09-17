import React from "react";
import PlayerCard from "../../UI-components/player-card/player-card";


const ScoreComponent: React.FC =()=>{
    //const arrScoreMember

    return(
        <div className="score">
            <div className="score_titles">
                <span>Score:</span><span>Players:</span>
            </div>
            <div className="score_players">
                <div className="score_players__points">
                    10SP
                </div>
                <div className="score_players__member">
                    <PlayerCard/>
                </div>
            </div>
            <div className="score_players">
                <div className="score_players__points">
                    In Progress
                </div>
                <div className="score_players__member">
                    <PlayerCard/>
                </div>
            </div>
        </div>

    )
}

export default ScoreComponent