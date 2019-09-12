import React from "react";
import { observer } from "mobx-react";

const liStyle = { listStyle: "none", fontSize: "20px" };
const scoreStyle = { padding: "5px", width: "10%", margin: "10px" };

@observer
export default class MatchGames extends React.Component {
  constructor(props) {
    super(props);
  }

  setPlayer1Score(evt) {
    this.props.game.setPlayer1Score(evt.target.value);
  }

  setPlayer2Score(evt) {
    this.props.game.setPlayer2Score(evt.target.value);
  }

  render() {
    const { play1Score, play2Score, winner } = this.props.game;
    const { index } = this.props;
    return (
      <li style={liStyle}>
        <span>Game {index + 1}</span>
        <input
          onChange={this.setPlayer1Score.bind(this)}
          type="number"
          style={scoreStyle}
          value={play1Score}
        />
        <b>:</b>
        <input
          onChange={this.setPlayer2Score.bind(this)}
          type="number"
          style={scoreStyle}
          value={play2Score}
        />
        {winner && <span>won by {winner}</span>}
      </li>
    );
  }
}
