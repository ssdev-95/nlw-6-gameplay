import React from "react";
import LoginScreen from "./login";
import HomeScreen from "./home";
import ScheduleMatch from "./schedule-match";
import DetailedMatch from "./detailed-match";
import Guilds from "./guilds";

import {
	NavigationContainer
} from "@react-navigation/native";

import {
	createNativeStackNavigator
} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
const screenOptions = { headerShown: false };

function StackNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={screenOptions}
			>
				<Stack.Screen 
					name="Login"
					component={LoginScreen} 
				/>

				<Stack.Screen
					name="Home"
					component={HomeScreen}
				/>

				<Stack.Screen
					name="ScheduleMatch"
					component={ScheduleMatch}
				/>

				<Stack.Screen
					name="DetailedMatch"
					component={DetailedMatch}
				/>

				<Stack.Screen
					name="Guilds"
					component={Guilds}
					options={{
						presentation:"transparentModal"
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
 )
}

export default StackNavigator;
