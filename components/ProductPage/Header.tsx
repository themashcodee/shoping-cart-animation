import React from "react";
import Heart from "components/icons/Heart";
import Back from "components/icons/Back";
import { motion } from "framer-motion";
import Link from "next/link";
import { AppearY } from "animations";

interface Props {}

const Header = (props: Props) => {
	return (
		<motion.header
			variants={AppearY}
			className="flex justify-between px-8 items-center"
		>
			<Link href="/" passHref={true} replace={true}>
				<motion.span
					whileHover={{
						scale: 1.3,
						backgroundColor: "#4a4583",
						color: "#fff",
					}}
					whileTap={{ scale: 0.9, backgroundColor: "#4a4583" }}
					className="w-8 h-8 p-1 rounded-full text-white"
				>
					<Back />
				</motion.span>
			</Link>
			<motion.span
				whileHover={{
					scale: 1.3,
					backgroundColor: "rgb(239, 68, 68)",
				}}
				whileTap={{ scale: 0.8, backgroundColor: "rgb(239, 68, 68)" }}
				className="w-8 h-8 p-1 rounded-full text-white"
			>
				<Heart />
			</motion.span>
		</motion.header>
	);
};

export default Header;
