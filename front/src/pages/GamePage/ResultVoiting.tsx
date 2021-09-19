import React from "react";

export const ResultVoiting :React.FC =()=>{
    const arrOfVote = [11 , 22 , 33 ]

    return(
        <div className="statistics_cards-percent">
            {arrOfVote.map((item, index) => (
                <div key={index} className= "statistics_cards-percent_item">
                    {item}%
               </div>
            ))}

        </div>
    )
}
