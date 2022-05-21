import React from "react";
import StackNavigator from "./screens/navigator";
import { StatusBar } from "expo-status-bar";
import {
	NativeBaseProvider, extendTheme
} from "native-base";
import { AuthProvider } from "./hooks/useAuth";
import { MatchProvider } from "./hooks/useMatch";

const theme = extendTheme({
	colors: {
		gameplay: {
			background: "#0D133D"
		}
	}
})

function App() {
  return (
		<NativeBaseProvider theme={theme}>
			<MatchProvider>
				<AuthProvider>
					<StackNavigator />
					<StatusBar style="light" />
				</AuthProvider>
			</MatchProvider>
		</NativeBaseProvider>
  );
}

export default App;
