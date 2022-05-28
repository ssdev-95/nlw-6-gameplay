import React, { ReactNode } from "react";

import { VStack } from "native-base";
import Animated, { FadeIn } from "react-native-reanimated";

type Props = {
	children: any;
	style?:Record<string, any>;
} 

export function Background({ children, style }:Props) {
	return (
		<VStack
			width="100%"
			height="100%"
			bg="gameplay.background"
		>
			{ style ? (
				<Animated.View
					entering={FadeIn.duration(1000)}
					style={style}
				>
					{ children }
				</Animated.View>
			) : (
				<>
					{children}
				</>
			)}
		</VStack>
	)
}
