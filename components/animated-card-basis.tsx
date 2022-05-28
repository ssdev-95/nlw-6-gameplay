import React, { ReactNode } from "react";

import Animated, {
	SlideInLeft
} from "react-native-reanimated";

type Props = {
	children:RewctNode;
}

export function AnimatedCard({ children }:Props) {
	return (
		<Animated.View
			entering={
				SlideInLeft
					.duration(1000)
			}
		>
			{ children }
		</Animated.View>
	)
}
