import React, { Fragment, useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { AppContext } from "../context/app_context";

const StageTwo = () => {
  const {
    state: { result },
    getNewOne,
    reset,
  } = useContext(AppContext);

  return (
    <Fragment>
      <Text>Who pays the bill?</Text>
      <Text>The looser is : </Text>
      <Text style={styles.looserWrapper}>{result}</Text>

      <Button buttonStyle={styles.button} title="Try again" onPress={() => getNewOne()} />
      <Button buttonStyle={styles.button} title="Start Over" onPress={() => reset()} />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  looserWrapper: {
    color: "red",
    fontSize: 30,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#DB3EB1",
    marginTop: 20,
  },
});

export default StageTwo;
