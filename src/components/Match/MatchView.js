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
    const {matchStore, index} = this.props;
    return (
      <div>
        <MatchHeader index={index} matchStore={matchStore} />
        <MatchGames index={index} data-testid={`MatchGames${index}`} matchStore={matchStore} />
        <MatchFooter index={index} data-testid={`MatchFooter${index}`} matchStore={matchStore} />
      </div>
    );
  }
}
