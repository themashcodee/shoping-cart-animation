import React, { useEffect } from "react";
import Product from "@/components/Product";

import { motion, useAnimation } from "framer-motion";
import { Stagger } from "animations";
import { Products as Items } from "database";

interface Props {}

const Products = ({}: Props) => {
	const controls = useAnimation();
	useEffect(() => {
		controls.start("animate");
	}, []);

	return (
		<motion.section
			initial="initial"
			custom={1}
			animate={controls}
			variants={Stagger}
			className="
			grid gap-4 
			grid-cols-1 
			xsm:grid-cols-2 
			sm:grid-cols-3 
			md:grid-cols-4 
			overflow-x-auto brandFilterScrollable px-8 pt-4 pb-8"
		>
			{Items.map((item) => {
				return (
					<Product
						key={item.id}
						id={item.id}
						name={item.name}
						image={item.image}
						price={item.price}
					/>
				);
			})}
		</motion.section>
	);
};
export default Products;
