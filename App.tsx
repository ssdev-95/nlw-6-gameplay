import React from "react";
import { LogBox } from "react-native";
import StackNavigator from "./screens/navigator";
import { StatusBar } from "expo-status-bar";
import {
	NativeBaseProvider, extendTheme
} from "native-base";
import { AuthProvider } from "./hooks/useAuth";
import { MatchProvider } from "./hooks/useMatch";
import { FormProvider } from "./hooks/useForm";

const theme = extendTheme({
	colors: {
		gameplay: {
			background: "#0D133D"
		}
	}
})

LogBox.ignoreLogs([
	"You are not currently signed in to Expo on your development machine."
])

function App() {
  return (
		<NativeBaseProvider theme={theme}>
			<FormProvider>
				<MatchProvider>
					<AuthProvider>
						<StackNavigator />
						<StatusBar style="light" />
					</AuthProvider>
				</MatchProvider>
			</FormProvider>
		</NativeBaseProvider>
  );
}

export default App;
