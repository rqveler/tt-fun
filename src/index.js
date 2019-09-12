import Stage from "./models/Stage";
import React from "react";
import ReactDOM from "react-dom";
import MatchView from "./components/Match/MatchView";
import StageView from "./components/Stage/StageView";
import createMatchStore from "./matchStoreFactory";

const matchStore = createMatchStore(
  {
    fn: "Avi",
    ln: "Cohen"
  },
  {
    fn: "Benny",
    ln: "Levi"
  }
);
const matchStore2 = createMatchStore(
  {
    fn: "Yossi",
    ln: "Levi"
  },
  {
    fn: "Eli",
    ln: "Mizrachy"
  }
);
const matchStore3 = createMatchStore(
  {
    fn: "Chai",
    ln: "Chemed"
  },
  {
    fn: "oded",
    ln: "Machnes"
  }
);
const matchStore4 = createMatchStore(
  {
    fn: "Nir",
    ln: "Baram"
  },
  {
    fn: "Eshhar",
    ln: "Weiss"
  }
);
const stageStore = new Stage("firstStage", 4);
stageStore.setMatch(0, matchStore);
stageStore.setMatch(1, matchStore2);
stageStore.setMatch(2, matchStore3);
stageStore.setMatch(3, matchStore4);

class App extends React.Component {
  addTodo = event => {};
  render() {
    return (
      <div className="App">
        <StageView store={stageStore} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
