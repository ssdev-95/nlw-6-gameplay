import Rect, {
	useMemo
} from "react";

import {
	Box,
	Icon,
	Text,
	Image,
	Button,
	HStack,
	VStack,
	Divider,
	FlatList
} from "native-base";

import {
	Header
} from "../components/schedule-header";

import {
	MaterialCommunityIcons
} from '@expo/vector-icons';

import {
	PlayerCard
} from "../components/player-card";

import { useMatch } from "../hooks/useMatch";

type PlayerType = {
	name:string;
	avatar:string;
	available:boolean;
	id:string;
}

const renderPlayers = (player:PlayerType) => (
	<PlayerCard player={player.item} />
);

const extractKey = (player:PlayerType) => player.id;

function DetailedMatch({ navigation }:any) {
	const { matches, matchId } = useMatch()

	const match = useMemo(()=>{
		return matches.find(item => item.id === matchId)
	},[matchId])

	const players = [
		{
			id: "82ejx8xJbUG282hah-882j2",
			name: "Diego Fernandes",
			avatar: "https:/github.com/diego3g.png",
			available: true
		}, {
			id: "2ejxGwi2j3e8s8ijh-882j2",
			name: "Mayk Brito",
			avatar: "https:/github.com/diego3g.png",
			available: true
		}, {
			id: "290kdnlqpaUqaIhah-84wp2",
			name: "Thiago Luchtenberg",
			avatar: "https:/github.com/diego3g.png",
			available: true
		}, {
			id: "0Kk0wmgoIHq28d8hh-882j2",
			name: "Rodrigo Gonçalves",
			avatar: "https:/github.com/diego3g.png",
			available: true
		},{
			id: "929dcjznnsIgfNhah-10soj",
			name: "Jakelliny Gracielly",
			avatar: "https:/github.com/diego3g.png",
			available: true     
		}
	]

	return (
		<VStack
			height="full"
			bg="gameplay.background"
			py={10}
		>
			<Header
				title={match.squad.name}
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
			<Box width="full" position="relative">
				<Image
					source={require("../assets/banner.png")}
					width="full"
					alt="A lol image"
				/>
				<Text
					color="blue.50"
					fontSize={36}
					fontWeight={600}
					left={8}
					bottom={8}
					position="absolute"
				>
					{match.subject}
				</Text>
			</Box>
			<HStack
				width="full"
				justifyContent="space-between"
				alignItems="center"
				px={4}
				pt={12}
				pb={6}
			>
				<Text
					color="blue.50"
					fontSize={24}
				>
				Players
				</Text>
				<Text
					color="blue.100"
					fontSize={16}
				>
					Total {players.length}
				</Text>
			</HStack>

			<VStack>
				<FlatList
					width="full"
					ItemSeparatorComponent={() => (
						<Divider
							width="80%"
							mr={0}
							ml="auto"
							bg="darkBlue.700"
							borderRadius={10}
						/>
					)}    
					renderItem={renderPlayers}
					data={players}
					keyExtractor={extractKey}
				/>
			</VStack>

			<Button
				colorScheme="red"
				borderRadius={8}
				width={200}
				mx="auto"
			>
				<HStack width="full" space={4}>
					<Icon
						as={MaterialCommunityIcons}
						name="discord"
						color="blue.50"
						size={6}
					/>
						<Divider
							color="blue.50"
							orientation="vertical"
						/>
						<Text color="blue.50">
							Join Discord server
						</Text>       
				</HStack>
			</Button>
		</VStack>
	)
}

export default DetailedMatch;
