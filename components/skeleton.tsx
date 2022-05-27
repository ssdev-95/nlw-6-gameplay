import React from "react";

import {
	HStack,
	VStack,
	Skeleton as Basis
} from "native-base";

interface SkeletonProps {
	type?:string;
}

export function Skeleton({ type }) {
	const auxiliar = [ "a", "b", "c" ]

	return (
		<VStack
			space={16}
			px={4}
			pb={8}
			mt={type==="guilds" ? 104 : 0}
		>
			{!type && (
				<HStack
					justifyContent="space-between"
					pt={12}
					pb={6}
				>
					<Basis
						width="40%"
						height={4}
						borderRadius={4}
					/>
					<Basis
						size={3}
						borderRadius={12}
					/>
				</HStack>
			)}
			{auxiliar.map((aux:string) => (
				<HStack
					key={aux}
					space={6}
				>
					<Basis
						size={16}
						borderRadius={4}
					/>
					<Basis.Text
						width="60%"
						borderRadius={4}
					/>
				</HStack>
			))}
		</VStack>
	)
}
