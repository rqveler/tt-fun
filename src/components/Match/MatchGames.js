import React from "react";
import { observer } from "mobx-react";
import MatchGame from "./MatchGame";
import GameWinner from "./GameWinner"
import players from "../../repos/players"

@observer
export default class MatchGames extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {matchStore}=this.props;
    return (
      <div data-testid="MatchGames">
        <ul>
          {matchStore.games.map((game, index) => (
            <li key={index}>          
              <MatchGame game={game} index={index} />
              <GameWinner index={index} winner={game.winnerId && players.getName[game.winnerId]} />             
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
