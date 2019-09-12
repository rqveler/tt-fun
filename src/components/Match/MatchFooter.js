import React from "react";
import { observer } from "mobx-react";

@observer
export default class MatchFooter extends React.Component {
  render() {
    const winner = this.props.store.winner;
    return <div>{winner && <h2>{`The winner is ${winner.fullName}`}</h2>}</div>;
  }
}
