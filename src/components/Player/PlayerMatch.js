import React from "react";
import { observer } from "mobx-react"

 const PlayerMatch = observer((props) => {
   
    const match = props.macth;     
    return (         
        <ul>
          {
              match.games.map(g=> {
                <li>
                  g.player1Score + ":" +  g.player2Score
                  </li>
              })
          }
        </ul>  
    )
  })

  export default GameWinner;