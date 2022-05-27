import React, {
	useState,
	useCallback
} from "react";

import  {
	Box,
	Text,
	VStack,
	Divider,
	FlatList
} from "native-base";

import { useFocusEffect } from "@react-navigation/native";

import { Skeleton } from "../components/skeleton";
import { GuildCard } from "../components/guild-card";
import { useForm } from "../hooks/useForm";
import { retrieveData } from "../services/storage";
import {
	IGuild,
	GUILD_KEY
} from "../custom-types.d";

interface RenderProps {
	item: IGuild;
}

function Guilds({ navigation }) {
	const { selectGuild } = useForm()
	const [loading, setLoading] = useState(true)
	const [guilds, setGuilds] = useState<IGuild[]>([])

	useFocusEffect(
		useCallback(() => {
			retrieveData(GUILD_KEY)                               
				.then((data)=>{
					if(data) {
						const parsed = JSON.parse(data)
						setGuilds(parsed)
					}
				})
				.catch(err => console.error(err))

				setTimeout(()=>setLoading(false), 4000)
		},[])
	);

	function handleSelectGuild(guild:IGuild) {
		selectGuild(guild)
		navigation.goBack()
	}

	const extractKey = (guild:IGuild) => guild.id;
	const renderGuild = ({ item }:RenderProps) => (
		<GuildCard
			guild={item}
			onPress={()=>handleSelectGuild(item)}
		/>
	);

	return (
		<VStack
			height="full"
			width="full"
			pt={8}
			bg="gameplay.background"
		>
			<Divider
				width={38}
				height={1}
				mt={4}
				mx="auto"
				bg="darkBlue.600"
				borderRadius={2}
			/>
			{ loading ? <Skeleton type="guilds" /> : (
			<Box
				width="full"
				height="100%"
			>
				<FlatList
					data={guilds}
					renderItem={renderGuild}
					keyExtractor={extractKey}
					ListHeaderComponent={
						<Box
							background="transparent"
							height={1}
							mt={104}
							width="full"
						/>
					}
					ContentContainerStyle={{
						pb: 69
					}}
					ItemSeparatorComponent={() => (
						<Divider
							width="70%"
							mr={0}
							ml="auto"
							bg="darkBlue.700"
							borderRadius={10}                           
						/>
					)}
				/>
			</Box>
			)}
		</VStack>
	)
}

export default Guilds;
