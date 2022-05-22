import {
	Box,
	Text,
	Image,
	HStack,
	VStack,
	Divider
} from "native-base";

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
		<Box>
			<HStack>
				<Image
					source={{uri:player.avatar}}
					alt={player.name}
				/>
				<VStack>
					<Text color="blue.50">{player.name}</Text>
					<HStack>
						<Divider
							color={
								player.available ?
								"green.900" :
								"red.700"
							}
							size={2}
							borerRadius="100%"
						/>
						<Text color="blue.50">
							{
								player.available ?
								"Available" :
								"Unavailable"
							}
						</Text>
					</HStack>
				</VStack>
			</HStack>
		</Box>
	)
}
