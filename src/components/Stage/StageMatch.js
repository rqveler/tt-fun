import React from "react";
import { observer } from "mobx-react";

const playerBox = {
  border: "1px solid black",
  padding: "3px",
  margin: "2px",
  maxWidth: "40%"
};

const matchBox = {
  marginBottom: "10px",
  cursor: "pointer"
};

@observer
export default class StageMatch extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMatchDetails = this.toggleMatchDetails.bind(this);
  }

  toggleMatchDetails() {
    this.props.toggleMatchDetails();
  }
  render() {
    const match = this.props.match;
    return (
      <div style={matchBox} onClick={this.toggleMatchDetails}>
        <div style={playerBox}>{match.player1.fullName}</div>
        <div style={playerBox}>{match.player2.fullName}</div>
      </div>
    );
  }
}
