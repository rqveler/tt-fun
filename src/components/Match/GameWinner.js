import React from "react";
import { observer } from "mobx-react"

 const GameWinner = observer((props) => {    
    const {winnerName, index} = props;     
    return (         
        <span data-testid={`Game${index}Winner`}>
        {winnerName && <span>won by {winnerName}</span>}   
        </span>  
    )
  })

  export default GameWinner;