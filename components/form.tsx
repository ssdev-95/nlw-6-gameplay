import React, {
	ChangeEvent,
	useMemo
} from "react";

import {
	Icon,
	Text,
	Button,
	VStack,
	HStack,
	TextArea,
	FormControl
} from "native-base";

import {
	MaterialCommunityIcons
} from "@expo/vector-icons";

import { SmInput } from "./small-input";
import { SelectGuild } from "./select-guild";
import { useForm } from "../hooks/useForm";
import { IGuild, EditingMatch } from "../custom-types.d";

type FormProps = {
	onChange?: ({key: string, value:string})=>void;
	onSubmit?: ()=>void;
	onOpen: ()=>void;
}

export function Form({
	onChange, onSubmit,	 onOpen
}: FormProps) {
	const { newMatch, guild, selected } = useForm()

	const hasCompleted = useMemo(() => {
		return (
			Object.values(newMatch).every(val=>val!=="")
			&& Object.entries(guild).length > 0
			&& selected !== "none"
		);
	},[newMatch, selected, guild])

	return (
		<VStack
			width="full"
			pt={2}
			pb={6}
			px={2}
			height="full"
			space={10}
		>
			<SelectGuild
				title="Select a guild. :D"
				guild={guild}
				onPress={onOpen}
			/>

			<HStack
				width={225}
				space={2}
			>
				<FormControl width="full">
					<FormControl.Label>
						Day and month
					</FormControl.Label>
					<HStack width={30} alignItems="center">
						<SmInput
							onChangeText={text => onChange({
								key:"day",
								value:text
							})}
							defaultValue={newMatch.day ?? ""}
						/>
						<Text
							color="blue.200"
							fontSize="xl"
							mx={1}
						>
							{"/"}
						</Text>
						<SmInput
							onChangeText={text => onChange({
								key:"month",
								value: text
							})}
							defaultValue={newMatch.month ?? ""}
						/>
					</HStack>
				</FormControl>
				<FormControl width="full">
					<FormControl.Label>
						Time
					</FormControl.Label>
					<HStack width={30} alignItems="center">
						<SmInput
							onChangeText={text => onChange({
								key:"hour",
								value:text
							})}
							defaultValue={newMatch.hour ?? ""}
						/>
						<Text
							color="blue.200"
							mx={1}
							fontSize="xl"
						>
							{":"}
						</Text>
						<SmInput
							onChangeText={text => onChange({
								key:"minute",
								value:text
							})}
							defaultValue={newMatch.minute ?? ""}
						/>
					</HStack>
				</FormControl>
			</HStack>

			<FormControl
				width="full"
				justifyContent="space-between"
			>
				<HStack>
					<FormControl.Label color="blue.100">
						Decription
					</FormControl.Label>

					<Text color="gray.400" ml="auto">
						Max 100 characters
					</Text>
				</HStack>
				<TextArea
					onChangeText={text => onChange({
						key:"description",
						value:text
					})}
					defaultValue={newMatch.description ?? ""}
					maxLength={100}
					maxRow={7}
					borderColor="darkBlue.700"
					bg="darkBlue.700"
					color="blue.50"
					multiline
					_focus={{
						borderColor:"darkBlue.500",
						opacity: 0.8
					}}
				/>
			</FormControl>
			<Button
				background="red.700"
				disabled={!hasCompleted}
				_disabled={{
					background:"green.500",
					opacity: 0.48
				}}
				_pressed={{
					background:"red.700",
					opacity: 0.48
				}}
				borderRadius={8}
				height={12}
				width="full"
				fontSize="xl"
				mx="auto"
				onPress={onSubmit}
			>
				SCHEDULE
			</Button>
		</VStack>
	)
}
