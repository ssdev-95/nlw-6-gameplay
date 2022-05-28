import {
	Box,
	Icon,
	Text,
	Image,
	HStack,
	VStack,
	Divider
} from "native-base";

import {
	MaterialCommunityIcons
} from "@expo/vector-icons";

import { AnimatedCard } from "./animated-card-basis";

type PlayerType = {
	name:string;
	avatar:string;
	available:boolean;
}

type CardProps = {
	player:PlayerType;
}

export function PlayerCard({ player }: CardProps) {
	return (
	<AnimatedCard>
		<Box
			mt={2}
			py={2}
			width="full"
		>
			<HStack>
				{player.avatar ? (
					<Image
						source={{uri:player.avatar}}
						size={16}
						borderRadius={8}
						alt={player.name}
						mx={4}
					/>
				) : (
					<Icon
						color="red.700"
						as={MaterialCommunityIcons}
						name="account"
						size={16}
					/>
				)}
				<VStack justifyContent="space-evenly">
					<Text
						color="blue.50"
						fontSize={24}
					>
						{player.name}
					</Text>
					<HStack alignItems="center" space={3}>
						<Divider
							bg={
								player.available ?
								"limegreen" :
								"red.700"
							}
							size={2}
							borderRadius={100}
						/>
						<Text color="blue.100">
							{
								player.available ?
								"Ready" :
								"So far away..."
							}
						</Text>
					</HStack>
				</VStack>
			</HStack>
		</Box>
	</AnimatedCard>
	)
}
