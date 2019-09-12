import React from "react";
import { observer } from "mobx-react"

 const GameWinner = observer((props) => {
    console.log("props.winner", props.winner);
    const winner = props.winner;     
    return (         
        <span>
        {winner && <span>won by {winner.fullName}</span>}   
        </span>  
    )
  })

  export default GameWinner;