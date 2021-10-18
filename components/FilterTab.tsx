import React, { useEffect } from "react";
import { Brands } from "database";

import { motion, useAnimation } from "framer-motion";
import { AppearX, Stagger } from "animations";

interface Props {}

const FilterTab = ({}: Props) => {
	const controls = useAnimation();
	useEffect(() => {
		controls.start("animate");
	}, []);

	return (
		<article className="flex items-center gap-2 h-16 select-none pl-8 flex-shrink-0">
			<div className="rounded-2xl flex-shrink-0 shadow-lg bg-green-300 text-white flex items-center px-4 py-3 gap-2 cursor-pointer">
				<span>Brands</span>
			</div>

			<motion.ul
				initial="initial"
				animate={controls}
				variants={Stagger}
				className=" flex gap-4 rounded-l-lg w-full overflow-auto brandFilterScrollable px-4"
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
