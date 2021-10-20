import React, { useContext } from "react";
import { StoreContext } from "pages/_app";
import { Item } from "types/Item";

import Image from "next/image";
import Link from "next/link";
import Add from "components/icons/Add";
import Heart from "components/icons/Heart";

import { motion } from "framer-motion";
import { AppearY } from "animations";

interface Props {
	id: number;
	image: string;
	name: string;
	price: number;
}

const Product = ({ id, image, name, price }: Props) => {
	const { cart, setCart, setGlobalMessage } = useContext(StoreContext);

	function addItemToCart({ id, image, name, price, quantity }: Item) {
		const newItem = { id, name, image, price, quantity };
		const alreadyExistItem = cart.find((item) => item.id === id);

		if (alreadyExistItem) {
			alreadyExistItem.quantity++;
			return setGlobalMessage({
				type: "NOTIFY",
				text: `One more ${name} added in the cart`,
			});
		}
		setCart((prev) => [...prev, newItem]);
		setGlobalMessage({
			type: "NOTIFY",
			text: `${name} added in the cart`,
		});
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
					whileHover={{
						scale: 1.3,
						backgroundColor: "rgb(239, 68, 68)",
						color: "#fff",
					}}
					whileTap={{ scale: 0.8, backgroundColor: "rgb(239, 68, 68)" }}
					className="h-8 w-8 p-1 text-[#555555] rounded-full"
					onClick={() => console.table(cart)}
				>
					<Heart />
				</motion.span>
				<motion.span
					whileHover={{
						scale: 1.3,
						backgroundColor: "#f08a12",
						color: "#fff",
					}}
					whileTap={{ scale: 0.9, backgroundColor: "#f08a12" }}
					className="h-8 w-8 p-1 text-[#f08a12] rounded-full"
					onClick={() => addItemToCart({ id, image, name, price, quantity: 1 })}
				>
					<Add />
				</motion.span>
			</div>

			<Link href={`/products/${id}`} passHref={true} replace={true}>
				<div className="w-full my-2">
					<Image
						src={image}
						alt=""
						layout="responsive"
						width={800}
						height={400}
					/>
				</div>
			</Link>
			<h2 className="text-center text-[#555555] font-semibold">{name}</h2>
			<h1 className="text-center text-[#f08a12] text-xl font-semibold">
				{price}$
			</h1>
		</motion.div>
	);
};

export default Product;
