import Rect, {
	useMemo
} from "react";

import {
	Box,
	Text,
	Icon,
	Image,
	Button,
	VStack
} from "native-base";

import {
	Header
} from "../components/schedule-header";

import {
	MaterialCommunityIcons
} from '@expo/vector-icons';

import { useMatch } from "../hooks/useMatch";

function DetailedMatch({ navigation }:any) {
	const { matches, matchId } = useMatch()

	const match = useMemo(()=>{
		return matches.find(item => item.id === matchId)
	},[matchId])

	return (
		<VStack
			height="full"
			bg="gameplay.background"
			py={10}
		>
			<Header
				title="Detailed match"
				goBack={()=>navigation.goBack()}
				action={
					<Icon
						as={MaterialCommunityIcons}
						name="share-variant"
						size={8}
						color="red.700"
					/>
				}
			/>
			<Image
				source={require("../assets/banner.png")}
				width="full"
				alt="A lol image"
			/>
			<Text color="blue.100">{match.subject}</Text>
		</VStack>
	)
}

export default DetailedMatch;
