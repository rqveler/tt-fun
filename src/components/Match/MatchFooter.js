import React from "react";
import { observer } from "mobx-react";

@observer
export default class MatchFooter extends React.Component {
  render() {
    const {winner} = this.props.matchStore;
    const {index} = this.props;
    return <div data-testid={`MatchFooter${index}`}>{winner && <h4>{`The winner of the match is ${winner.name}`}</h4>}</div>;
  }
}
