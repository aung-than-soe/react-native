import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Platform } from "react-native";
import { AppContext } from "./src/context/app_context";
import StageOne from "./src/components/stage_one";
import StageTwo from "./src/components/stage_two";

class App extends Component {
  static contextType = AppContext;

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.context.state.stage == 1 ? <StageOne /> : <StageTwo />}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 80 : 30,
  },
});

export default App;
