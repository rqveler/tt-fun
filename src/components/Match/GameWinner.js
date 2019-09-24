import React from "react";
import { observer } from "mobx-react"

 const GameWinner = observer((props) => {    
    const {winner, index} = props;     
    return (         
        <span data-testid={`Game${index}Winner`}>
        {winner && <span>won by {winner.fullName}</span>}   
        </span>  
    )
  })

  export default GameWinner;