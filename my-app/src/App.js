import React from "react";
import Lobby from "./pages/Lobby";
import Fight from "./pages/Fight";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "Lobby",
    };
    this.handleChangeMode = this.handleChangeMode.bind(this);
  }

  handleChangeMode(e) {
    this.setState({ mode: e });
  }

  render() {
    if (this.state.mode === "Fight") {
      return (
        <Fight mode={this.state.mode} onModeChange={this.handleChangeMode} />
      );
    } else if (this.state.mode === "Lobby") {
      return (
        <Lobby mode={this.state.mode} onModeChange={this.handleChangeMode} />
      );
    }
  }
}

export default App;
