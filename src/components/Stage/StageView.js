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
          <div key={index}>
            <StageMatch
              toggleMatchDetails={this.toggleMatchDetails.bind(this, match)}              
              match={match}
            />
            {this.state.visibleMatch === match && <MatchView matchStore={match} />}
          </div>
        ))}
      </div>
    );
  }
}
