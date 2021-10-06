import { Formik } from "formik";
import React, { Fragment, useContext } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Button, Input, ListItem, Text } from "react-native-elements";
import { object, string } from "yup";
import { AppContext } from "../context/app_context";
import { MainLogo } from "../utils/tools";

const StageOne = () => {
  const context = useContext(AppContext);

  const renderPlayers = () =>
    context.state.players.map((item, idx) => (
      <ListItem
        key={idx}
        bottomDivider
        style={{ width: "100%" }}
        onLongPress={() => context.removePlayer(idx)}
      >
        <ListItem.Chevron />
        <ListItem.Content>
          <ListItem.Title>{item}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ));

  return (
    <Fragment>
      <Formik
        initialValues={{ player: "" }}
        validationSchema={object({
          player: string()
            .min(3, "Must be more than 3 characters")
            .max(15, "Must be 15 characters or less.")
            .required("Sorry, the name is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          context.addPlayer(values.player);
          resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <Fragment>
            <MainLogo />
            <Input
              placeholder="Add name here"
              leftIcon={{ type: "antdesign", name: "adduser" }}
              inputContainerStyle={{
                marginHorizontal: 50,
                marginTop: 50,
              }}
              renderErrorMessage={errors.player && touched.player}
              errorMessage={errors.player}
              errorStyle={{
                marginHorizontal: 50,
              }}
              onChangeText={handleChange("player")}
              onBlur={handleBlur("player")}
              value={values.player}
            />

            <Button
              buttonStyle={styles.button}
              title="Add player"
              onPress={handleSubmit}
            />
          </Fragment>
        )}
      </Formik>
      <View
        style={{
          padding: 20,
          width: "100%",
        }}
      >
        {context.state.players && context.state.players.length > 0 ? (
          <Fragment>
            <Text>List of players:</Text>
            {renderPlayers()}
            <Button
              title="Get the looser"
              buttonStyle={styles.button}
              onPress={() => context.next()}
            />
          </Fragment>
        ) : null}
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DB3EB1",
    marginTop: 20,
  },
});

export default StageOne;
