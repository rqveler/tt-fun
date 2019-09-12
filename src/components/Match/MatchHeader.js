import React from "react";
import { observer } from "mobx-react";

@observer
export default class MatchHeader extends React.Component {
  render() {
    const title = this.props.store.title;
    return <h2>{title} </h2>;
  }
}
