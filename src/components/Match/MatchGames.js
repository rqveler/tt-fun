import React from "react";
import { observer } from "mobx-react";
import MatchGame from "./MatchGame";
import GameWinner from "./GameWinner"

@observer
export default class MatchGames extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {matchStore}=this.props;
    return (
      <div>
        <ul>
          {matchStore.games.map((game, index) => (
            <li key={index}>          
              <MatchGame game={game} index={index} />
              <GameWinner winner={game.winner && matchStore["player"+game.winner]} />             
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
