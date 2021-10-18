import React, { useContext } from "react";
import { StoreContext } from "pages/_app";
import { Item } from "types/Item";

import Image from "next/image";
import Add from "@/components/icons/Add";
import Heart from "@/components/icons/Heart";

import { motion } from "framer-motion";
import { AppearY } from "animations";

interface Props {
	id: number;
	image: string;
	name: string;
	price: number;
}

const Product = ({ id, image, name, price }: Props) => {
	const { cart, setCart } = useContext(StoreContext);

	function addItemToCart({ id, image, name, price, quantity }: Item) {
		const newItem = { id, name, image, price, quantity };
		const alreadyExistItem = cart.find((item) => item.id === id);

		if (alreadyExistItem) return alreadyExistItem.quantity++;
		setCart((prev) => [...prev, newItem]);
	}

	return (
		<motion.div
			variants={AppearY}
			className="
			flex flex-col
			rounded-3xl p-6 bg-white shadow-lg"
		>
			<div className="flex justify-between">
				<motion.span
					whileHover={{ scale: 1.5 }}
					whileTap={{ scale: 0.9 }}
					className="h-6 w-6 text-[#555555]"
					onClick={() => console.table(cart)}
				>
					<Heart />
				</motion.span>
				<motion.span
					whileHover={{ scale: 1.5 }}
					whileTap={{ scale: 0.9 }}
					className="h-6 w-6 text-[#f08a12]"
					onClick={() => addItemToCart({ id, image, name, price, quantity: 1 })}
				>
					<Add />
				</motion.span>
			</div>
			<div className="w-full my-2">
				<Image
					src={image}
					alt=""
					layout="responsive"
					width={800}
					height={400}
				/>
			</div>
			<h2 className="text-center text-[#555555] font-semibold">{name}</h2>
			<h1 className="text-center text-[#f08a12] text-xl font-semibold">
				{price}$
			</h1>
		</motion.div>
	);
};

export default Product;
