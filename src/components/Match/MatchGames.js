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
    return (
      <div>
        <ul>
          {this.props.store.games.map((game, index) => (
            <li key={index}>          
              <MatchGame game={game} index={index} />
              <GameWinner winner={game.winner && this.props.store["player"+game.winner]} />             
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
