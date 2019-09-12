import React from "react";
import { observer } from "mobx-react";
import MatchGame from "./MatchGame";

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
            <MatchGame game={game} index={index} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}
