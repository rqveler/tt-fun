import React from "react";
import { observer } from "mobx-react"

 const GameWinner = observer((props) => {    
    const {winner} = props;     
    return (         
        <span>
        {winner && <span>won by {winner.fullName}</span>}   
        </span>  
    )
  })

  export default GameWinner;