import React from "react";
import LoginScreen from "./login";
import HomeScreen from "./home";

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
			</Stack.Navigator>
		</NavigationContainer>
 )
}

export default StackNavigator;
