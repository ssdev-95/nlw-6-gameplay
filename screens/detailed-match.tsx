import Rect, {
	useMemo,
	useState,
	useCallback
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
	useToast,
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

import { Platform, Alert, Share} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import * as Linking from 'expo-linking';
import { Skeleton } from "../components/skeleton";
import { useForm } from "../hooks/useForm";
import { api } from "../services/api";
import { IUser } from "../custom-types.d";

type PlayerType = {
	name:string;
	avatar:string;
	available:boolean;
	id:string;
}

type DetailedMatchProps = {
	navigation: any;
	route: {
		params: {
			matchId: string;
		}
	}
}

const renderPlayers = (player:PlayerType) => (
	<PlayerCard player={player.item} />
);

const extractKey = (player:PlayerType) => player.id;

function DetailedMatch({
	navigation, route
}: DetailedMatchProps) {
	const { matches } = useForm()
	const [ members, setMembers] = useState<IUser[]>([])
	const [invite, setInvite] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
	const toast = useToast()

	const { guild, ...match } = useMemo(()=>{
		const { matchId } = route.params
		const { guild, ...match } =  matches.find(item => item.id === matchId)

		try {
			setLoading(true)
			api.get(`/guilds/${guild.id}/widget.json`)
				.then(({ data }) => {
					setInvite(data.instant_invite)
	
					const peoples = (data.members.filter(
						member => member.status === "online"
					)).map(member => ({
						...member,
						name: member.username.split(" ")[0],
						avatar: member.avatar_url,
						available: member.status === "online"
					})) as IUser[]
	
					setMembers(peoples)

				}).catch(err => console.log(err))
		} catch {
			console.error("Failed retrieving members list.")
		} finally {
			setLoading(false)
		}

		return {
			...match,
			guild
		}
	},[])

	function handleShareInvitationLink() {
		const message = "Only ademiros can share invitation links!"
		if (!guild.owner) {
			switch (Platform.OS) {
				case "android":
					toast.show({ description: message })
					break;
				default:
					Alert.alert(
						"Operation not allowed",
						message
					)
					break;
			}
			return;
		}

		Share.share({message:invite})
	}

	function handleOpenInvitationLink() {
		const message = "Only ademiros can use invitation links!"
		if (!guild.owner) {
			switch (Platform.OS) {
				case "android":
					toast.show({ description: message })
					break;
				default:
					Alert.alert(
						"Operation not allowed",
						message
					)
					break;
			}

			return;
		}

		Linking.openURL(invite)
	}

	return (
		<VStack
			height="full"
			bg="gameplay.background"
			py={10}
		>
			<Header
				title="Match"
				goBack={navigation.goBack}
				action={
					<IconButton
						bg="transparent"
						onPress={handleShareInvitationLink}
						_pressed={{
							bg: "transparent",
							opacity: 0.68
						}}
						icon={
							<Icon
								as={MaterialCommunityIcons}
								name="share-variant"
								size={8}
								color={guild.owner ? "red.700" : "gray.500"}
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
					Total {members.length}
				</Text>
			</HStack>

			{loading ? (
				<Skeleton type="match" />
			) :(
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
						data={members}
						renderItem={renderPlayers}
						keyExtractor={extractKey}
					/>
				</VStack>
			)}

			<DiscordButton
				title="Join Discord server"
				bg={!guild.owner ? "gray.500" : ""}
				onPress={handleOpenInvitationLink}
			/>
			<Text>lol</Text>
		</VStack>
	)
}

export default DetailedMatch;
