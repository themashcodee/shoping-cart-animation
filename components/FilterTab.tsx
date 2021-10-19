import React from "react";
import { Brands } from "database";

import { motion } from "framer-motion";
import { AppearX, Stagger } from "animations";

interface Props {}

const FilterTab = ({}: Props) => {
	return (
		<article className="flex items-center gap-2 h-16 select-none pl-8 flex-shrink-0">
			<div className="rounded-2xl flex-shrink-0 shadow-lg bg-green-400 text-white flex items-center px-4 py-3 gap-2 cursor-pointer">
				<span>Brands</span>
			</div>

			<motion.ul
				initial="initial"
				animate="animate"
				variants={Stagger}
				className="flex gap-4 rounded-l-lg w-full Scrollable px-4"
			>
				{Brands.map((Icon, i) => (
					<motion.li
						key={i}
						variants={AppearX}
						whileHover={{ backgroundColor: "#ff8a00", color: "#fff" }}
						whileTap={{ backgroundColor: "#ff8a00", color: "#fff" }}
						className="opacity-1 flex-shrink-0 bg-[white] w-12 h-12 rounded-2xl p-3"
					>
						<Icon />
					</motion.li>
				))}
			</motion.ul>
		</article>
	);
};

export default FilterTab;
