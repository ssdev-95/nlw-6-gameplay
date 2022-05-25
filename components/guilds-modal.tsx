import React from "react";

import  {
	Text,
	Modal,
	Divider,
	FlatList
} from "native-base";

import { GuildCard } from "./guild-card";
import { useAuth } from "../hooks/useAuth";
import { IGuild } from "../custom-types.d";
//import { guilds } from "../mock.json";

type Props = {
	isOpen: boolean;
	onClose: (guild:IGuild) => void;
}

interface RenderProps {
	item: IGuild;
}

export function GuildsModal({ onClose, isOpen }:Props) {
	const { guilds } = useAuth()

	const extractKey = (guild:IGuild) => guild.id;
	const renderGuild = ({ item }:RenderProps) => (
		<GuildCard
			guild={item}
			onPress={()=>onClose(item)}
		/>
	);

	return (
		<Modal
			isOpen={isOpen}
			height="full"
			width="full"
			bg="rgba(0,0,0,0.28)"
			animationType="slide"
			transparent
		>
			<Modal.Content
				height="full"
				width="100%"
				bg="gameplay.background"
				mb={0}
				mt="auto"
			>
				<Modal.Body
					width="full"
					height="full"
				>
					<Divider
						width={38}
						height={1}
						mb={140}
						mx="auto"
						bg="darkBlue.600"
						borderRadius={2}
					/>
					<FlatList
						data={guilds}
						renderItem={renderGuild}
						keyExtractor={extractKey}
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
				</Modal.Body>
			</Modal.Content>
		</Modal>
	)
}
