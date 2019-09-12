import React from "react";
import { observer } from "mobx-react";
import MatchGames from "./MatchGames";
import MatchHeader from "./MatchHeader";
import MatchFooter from "./MatchFooter";

@observer
export default class MatchView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MatchHeader store={this.props.store} />
        <MatchGames store={this.props.store} />
        <MatchFooter store={this.props.store} />
      </div>
    );
  }
}
