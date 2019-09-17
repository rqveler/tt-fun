import React from "react";
import { observer } from "mobx-react";
import { PlayerMatch } from "./PlayerMatch";

const playerBox = {
  border: "1px solid black",
  padding: "3px",
  margin: "2px",
  maxWidth: "40%",
  marginBottom: "10px",
  cursor: "pointer"
};


@observer
export default class StageMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMatches: true }
  }
  toggleMatchDetails() {
    this.setState({ showMatches: !this.state.showMatches })
  }
  render() {
    const player = this.props.player;
    return (
      <div style={playerBox} onClick={this.toggleMatches}>
        {player.fullName}
        {this.state.showMatches &&
          player.matches.map(m => <PlayerMatch match={m} />)
        }
      </div>
    );
  }
}
