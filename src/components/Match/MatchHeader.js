import React from "react";
import { observer } from "mobx-react";

@observer
export default class MatchHeader extends React.Component {
  render() {
    const {title} = this.props.matchStore;
    const {index} = this.props;
    return <h2 data-testid={`MatchHeader${index}`}>{title} </h2>;
  }
}
