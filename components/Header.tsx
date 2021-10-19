import React from "react";
import Search from "components/icons/Search";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {}

const Header = (props: Props) => {
	return (
		<header className="flex px-8 flex-shrink-0 justify-between w-full h-14 items-center">
			<div className="text-3xl font-semibold cursor-pointer">
				<Link href="/">Amezin</Link>
			</div>
			<motion.div
				whileHover={{
					scale: 1.5,
					backgroundColor: "#eee",
				}}
				whileTap={{ scale: 0.8, backgroundColor: "#f4f5fc" }}
				className="h-8 w-8 p-2 rounded-full cursor-pointer"
			>
				<Search />
			</motion.div>
		</header>
	);
};

export default Header;
