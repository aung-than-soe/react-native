import React, { Component } from "react";
import Toast from "react-native-toast-message";

const AppContext = React.createContext();

class ApplicationProvider extends Component {
  initialState = { stage: 1, players: [], result: "" };
  state = { ...this.initialState };

  addPlayerHandler = (name) => {
    this.setState({
      players: [...this.state.players, name],
    });
  };

  removePlayerHandler = (idx) => {
    let temp = this.state.players;
    temp.splice(idx, 1);
    this.setState({ players: temp });
  };

  nextHandler = () => {
    const { players } = this.state;
    if (players.length < 2) {
      Toast.show({
        type: "error",
        text1: "Sorry",
        text2: "at least two players needed",
        position: "bottom",
      });
    } else {
      this.setState({ ...this.state, stage: 2 }, () => this.generateLooser());
    }
  };

  generateLooser = () => {
    const { players } = this.state;
    this.setState({
      result: players[Math.floor(Math.random() * players.length)],
    });
  };

  resetGameHandler = () => {
    this.setState({ ...this.initialState });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          addPlayer: this.addPlayerHandler,
          removePlayer: this.removePlayerHandler,
          next: this.nextHandler,
          getNewOne: this.generateLooser,
          reset: this.resetGameHandler,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, ApplicationProvider };
