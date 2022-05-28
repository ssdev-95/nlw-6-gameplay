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

import Animated, {
	SlideInDown
} from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import { Background } from "../components/background";
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
			bg="transparent"
		>
		<Animated.View
			entering={SlideInDown.duration(1000)}
			style={{
			height:"100%",
			width:"100%",
			pt:16
			}}
		>
		<Background>
			<Divider
				width={38}
				height={1}
				mt={45}
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
		</Background>
		</Animated.View>
		</VStack>
	)
}

export default Guilds;
