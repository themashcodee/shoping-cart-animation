import { AppearX } from "animations";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
	Icon: ReactNode;
}

const Brand = ({ Icon }: Props) => {
	return (
		<motion.li
			variants={AppearX}
			whileHover={{ backgroundColor: "#ff8a00", color: "#fff" }}
			whileTap={{ backgroundColor: "#ff8a00", color: "#fff" }}
			className="flex-shrink-0 bg-[white] w-12 h-12 rounded-2xl p-3"
		>
			{Icon}
		</motion.li>
	);
};

export default Brand;
