import React from "react";
import { observer } from "mobx-react";
import StageMatch from "./StageMatch";
import MatchView from "../Match/MatchView";

@observer
export default class StageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibleMatch: null };
  }

  toggleMatchDetails(match) {
    this.setState({
      visibleMatch: this.state.visibleMatch === match ? null : match
    });
  }

  render() {
    const stage = this.props.store;
    return (
      <div>
        <h2>{stage.title}</h2>
        {stage.matches.map((match, index) => (
          <div>
            <StageMatch
              toggleMatchDetails={this.toggleMatchDetails.bind(this, match)}
              key={index}
              match={match}
            />
            {this.state.visibleMatch === match && <MatchView store={match} />}
          </div>
        ))}
      </div>
    );
  }
}
