import Stage from "./models/Stage";
import React from "react";
import ReactDOM from "react-dom";
import StageView from "./components/Stage/StageView";
import createMatchStore from "./helpers/matchStoreFactory";

const matchStore = createMatchStore(
  {
    fn: "Avi",
    ln: "Cohen",
    phone:"0521234561"
  },
  {
    fn: "Benny",
    ln: "Levi",
    phone:"0521234562"
  }
);
const matchStore2 = createMatchStore(
  {
    fn: "Yossi",
    ln: "Levi",
    phone:"0521234563"
  },
  {
    fn: "Eli",
    ln: "Mizrachy",
    phone:"0521234564"
  }
);
const matchStore3 = createMatchStore(
  {
    fn: "Chai",
    ln: "Chemed",
    phone:"0521234565"
  },
  {
    fn: "oded",
    ln: "Machnes",
    phone:"0521234566"
  }
);
const matchStore4 = createMatchStore(
  {
    fn: "Nir",
    ln: "Baram",
    phone:"0521234567"
  },
  {
    fn: "Eshhar",
    ln: "Weiss",
    phone:"0521234568"
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
