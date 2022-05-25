import React, { useMemo } from "react";

import {
	Box,
	Text,
	Image,
	VStack,
	HStack,
	Divider,
	FlatList,
} from "native-base";

import { MatchCard } from "./match-card";
import { useMatch } from "../hooks/useMatch";
import { useForm } from "../hooks/useForm";
import { IMatch } from "../custom-types.d";

type MatchesProps = {
	redirect: (screen:string)=>void;
}

export function Matches({ redirect }: MatchesProps) {
	const { matches, selectMatch } = useMatch()
	const { selected } = useForm()

	function handleRedirect(id:string) {
		selectMatch(id ?? "None selected")
		redirect("DetailedMatch")
	}

	const filtered = useMemo(() => {
		if (selected === "none") {
			return matches;
		}

		return matches.filter(
			match => match.category === selected
		);
	}, [selected])

	const extractKey = (match: IMatch) => match.id

	const renderMatch = ({ item }: IMatch) => (
		<MatchCard
			match={item}
			onPress={()=>handleRedirect(item.id)}
		/>
	)

	return (
		<VStack
			width="full"
			flex={1}
			my={6}
			pr={2}
		>
			<HStack
				width="full"
				justifyContent="space-between"
				py={2}
				px={4}
			>
				<Text color="blue.50">Scheduled matches</Text>
				<Text color="gray.400">
					{`Total ${matches.length ?? 0}`}
				</Text>  
			</HStack>

			<FlatList
				width="full"
				height="full"
				ItemSeparatorComponent={() => (
					<Divider
						width="70%"
						mr={0}
						ml="auto"
						bg="darkBlue.700"
						borderRadius={10}
					/>
				)}
				data={filtered}
				renderItem={renderMatch}
				showsVerticalScrollIndicator={false}
				keyExtractor={extractKey}
			/>
		</VStack>
	)
}
