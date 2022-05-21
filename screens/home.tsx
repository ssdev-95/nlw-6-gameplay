import React from "react";
import {
	Box,
	VStack
} from "native-base";

import { Header } from "../components/header";
import { Categories } from "../components/categories";
import { Matches } from "../components/matches";

function HomeScreen() {
	const user = {
		avatar: "https://github.com/xSallus.png",
		name: "Sarô Senpai",
		bio: "AutoDevs vamos codar!"
	}

	return (
		<VStack
			py={10}
			px={2}
			width="full"
			height="full"
			bg="darkBlue.800"
		>
			<Header user={user}	/>
			<Categories />
			<Matches />
		</VStack>
	)
}

export default HomeScreen;
