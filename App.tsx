import React from "react";
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import LoginScreen from "./screens/login";

import {
	Center,
	Image
} from "native-base";

function App() {
  return (
		<NativeBaseProvider>
			<LoginScreen />
			<StatusBar style="light" />
		</NativeBaseProvider>
  );
}

export default App;
