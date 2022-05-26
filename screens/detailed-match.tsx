import Rect, {
	useMemo
} from "react";

import {
	Box,
	Icon,
	Text,
	Image,
	HStack,
	VStack,
	Divider,
	Heading,
	FlatList,
	IconButton
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

import {
	DiscordButton
} from "../components/discord-button";

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

	const { guild, ...match } = useMemo(()=>{
		return matches.find(item => item.id === matchId)
	},[matchId])

	return (
		<VStack
			height="full"
			bg="gameplay.background"
			py={10}
		>
			<Header
				title="Match"
				goBack={()=>navigation.goBack()}
				action={
					<IconButton
						bg="transparent"
						_pressed={{
							bg: "transparent",
							opacity: 0.68
						}}
						icon={
							<Icon
								as={MaterialCommunityIcons}
								name="share-variant"
								size={8}
								color="red.700"
							/>
						}
					/>
				}
			/>
			<Box width="full" position="relative">
				<Image
					source={require("../assets/banner.png")}
					width="full"
					alt="A lol image"
				/>
				<VStack
					height={20}
					space={2}
					position="absolute"
					bottom={8}
					left={8}
				>
					<Heading
						color="blue.50"
						fontSize={36}
					  lineHeight={32}
						mb={4}
					>
						{guild.name}
					</Heading>

					<Text
						fontSize={16}
						fontWeight={400}
						color="blue.200"
					>
						{match.description}
					</Text>

					<HStack
						space={3}
						alignItems="center"
					>
						<Icon
							as={MaterialCommunityIcons}
							name="calendar-blank"
							color="red.500"
							size={4}
						/>
						<Text
							color="gray.500"
							fontSize={16}
						>
							{match.date}
						</Text>

						<Text
							fontSize={16}
							color="gray.500"
							fontWeight={400}
						>
							{" - "}
						</Text>
						
						<Text
							fontSize={16}
							fontWeight={400}
							color="gray.500"                            
						>
							{guild.owner ? "Ademiro" : "Guest"}
						</Text>
					</HStack>
				</VStack>
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
					color="gray.400"
					fontSize={16}
				>
					Total {guild.players.length}
				</Text>
			</HStack>

			<VStack
				height="45%"
				mb={6}
			>
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
					data={guild.players}
					renderItem={renderPlayers}
					keyExtractor={extractKey}
				/>
			</VStack>

			<DiscordButton
				title="Join Discord server"
			/>
		</VStack>
	)
}

export default DetailedMatch;
