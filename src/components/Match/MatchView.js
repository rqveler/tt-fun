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
    const {matchStore} = this.props;
    return (
      <div>
        <MatchHeader matchStore={matchStore} />
        <MatchGames matchStore={matchStore} />
        <MatchFooter matchStore={matchStore} />
      </div>
    );
  }
}
