import React, {
	useEffect
}from "react";

import {
	Box,
	VStack
} from "native-base";

import { Header } from "../components/header";
import { Categories } from "../components/categories";
import { Matches } from "../components/matches";
import { useAuth } from "../hooks/useAuth";

function HomeScreen({ navigation }: any) {
	const { user } = useAuth()

	function goBack() {
		navigation.goBack()
	}

	useEffect(()=>{
		if(!Object.entries(user).length) {
			goBack()
		}
	},[user])

	return (
		<VStack
			py={10}
			px={2}
			width="full"
			height="full"
			bg="gameplay.background"
		>
			<Header />
			<Categories />
			<Matches />
		</VStack>
	)
}

export default HomeScreen;
