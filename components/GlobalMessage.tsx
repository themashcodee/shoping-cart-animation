import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { GlobalMessageAnim } from "animations";

enum MessageTypeColors {
	WARNING = "bg-red-400",
	ALERT = "bg-yellow-400",
	NOTIFY = "bg-green-400",
}

type Props = {
	text: string;
	type: "WARNING" | "ALERT" | "NOTIFY";
};

const GlobalMessage = ({ text, type }: Props) => {
	const controls = useAnimation();
	useEffect(() => {
		controls.start("animate");
	});

	return (
		<motion.div
			initial="initial"
			animate={controls}
			exit="exit"
			variants={GlobalMessageAnim}
			className={`
                        absolute top-10 left-1/2 transform
                        ${MessageTypeColors[type]} 
                        text-white text-center py-1 px-2 z-50 shadow-2xl rounded
                        `}
		>
			{text}
		</motion.div>
	);
};

export default GlobalMessage;
