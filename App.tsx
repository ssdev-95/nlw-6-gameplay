import React from "react";
import StackNavigator from "./screens/navigator";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

function App() {
  return (
		<NativeBaseProvider>
			<StackNavigator />
			<StatusBar style="light" />
		</NativeBaseProvider>
  );
}

export default App;
