import React from "react";

import {
	Center,
	Image
} from "native-base";

function LoginScreen() {
	return (
		<Center
			width="full"
			height="full"
			colorMode="dark"
		>
			<Image
				source={{uri:"/assets/adaptive-icon.png"}}
				size={15}
				alt="Gameplay icon"
			/>
		</Center>
	);
}

export default LoginScreen;
