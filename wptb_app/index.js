import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import { ApplicationProvider } from "./src/context/app_context";
import Toast from "react-native-toast-message";

import App from "./App";

const provider = () => (
  <ApplicationProvider>
    <App />
    <Toast ref={(ref) => Toast.setRef(ref)} />
  </ApplicationProvider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(provider);
