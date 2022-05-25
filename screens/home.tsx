import React, {
	useEffect,
	useCallback
}from "react";

import { useFocusEffect } from "@react-navigation/native";


import {
	Box,
	VStack
} from "native-base";

import { Header } from "../components/header";
import { Categories } from "../components/categories";
import { Matches } from "../components/matches";
import { useAuth } from "../hooks/useAuth";
import { useMatch } from "../hooks/useMatch";

function HomeScreen({ navigation }: any) {
	const { user, guilds } = useAuth()
	const { retrieveMatches } = useMatch()

	function goBack() {
		navigation.goBack()
	}

	useEffect(()=>{
		if(!Object.entries(user).length) {
			goBack()
		}
	},[user])

	useFocusEffect(
		useCallback(() => {
			const { index, routes } = navigation.getState()
			const route = routes[index].name

			if(route === "Home") {
				retrieveMatches()
					.catch(err => console.log(err))
			}

			return () => console.log("Home gone out of focus")
		}, [])
	)

	return (
		<VStack
			py={10}
			px={2}
			width="full"
			height="full"
			bg="gameplay.background"
		>
			<Header action={() => {
				navigation.navigate('ScheduleMatch')
			}} />
			<Categories type="show" />
			<Matches
				redirect={(screen:string) => {
					navigation.navigate(screen)
				}}
			/>
		</VStack>
	)
}

export default HomeScreen;
