import React from "react";
import { observer } from "mobx-react";


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
    const { game } = this.props;
    const { index } = this.props;
    return (
      <span data-testid={`MatchGame${index}`}>
        <span>Game {index + 1}</span>
        <input
          data-testid={`FirstPlayer${index}`}
          onChange={this.setPlayer1Score.bind(this)}
          type="number"
          style={scoreStyle}
          value={game.play1Score}
        />
        <b>:</b>
        <input
          data-testid={`SecondPlayer${index}`}
          onChange={this.setPlayer2Score.bind(this)}
          type="number"
          style={scoreStyle}
          value={game.play2Score}
        />
      
      </span>
    );
  }
}
