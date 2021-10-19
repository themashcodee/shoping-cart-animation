import React, { useContext, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { AppearX, CartMiniViewAnim, Stagger } from "animations";
import { StoreContext } from "pages/_app";
import { Item } from "types/Item";
import Image from "next/image";

import Go from "components/icons/Go";

interface Props {}

const CartMiniView = (props: Props) => {
	const controls = useAnimation();
	useEffect(() => {
		controls.start("expanded");
	}, []);

	const { cart } = useContext(StoreContext);
	const [items, setItems] = useState<Item[]>(cart);
	const [isMinized, setIsMinimez] = useState<Boolean>(false);

	useEffect(() => {
		setItems(cart);
	}, [cart]);

	return (
		<motion.div
			initial="initial"
			animate={controls}
			variants={CartMiniViewAnim}
			className="
        fixed bottom-0 left-1/2 h-24 -translate-x-1/2 bg-[#1a191c] w-full max-w-[640px] sm:rounded-t-3xl
        flex flex-col min-w-[200px]"
		>
			<div
				onClick={() => {
					isMinized ? controls.start("expanded") : controls.start("minimized");
					setIsMinimez(!isMinized);
				}}
				className="red w-full flex justify-center py-[6px] flex-shrink-0"
			>
				<button className="w-14 h-1 rounded-full bg-[#46434b]"></button>
			</div>

			{!isMinized && (
				<section className="flex gap-4 items-center h-full px-4 justify-end">
					<motion.ul
						custom={{ delay: 0.5 }}
						initial="initial"
						animate="animate"
						exit="exit"
						variants={Stagger}
						className="h-full w-full flex flex-row-reverse gap-2 items-center Scrollable"
					>
						{items.map((item) => {
							return (
								<motion.div
									key={item.id}
									variants={AppearX}
									className="w-14 h-14 rounded text-xs
                                    flex justify-center items-center p-1
                                    bg-[#2a282e] flex-shrink-0 relative"
								>
									<div
										className="
									absolute h-6 w-6 bg-purple-700 rounded-full
									text-white justify-center flex items-center -left-1 -top-1 z-20
									"
									>
										{item.quantity}
									</div>
									<span className="w-full">
										<Image
											src={item.image}
											layout="responsive"
											width="800"
											height="400"
											className="m-auto"
											alt=""
										/>
									</span>
								</motion.div>
							);
						})}
					</motion.ul>

					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						className="w-9 h-9 p-2 text-white bg-[#f08a12] rounded-full flex-shrink-0"
					>
						<Go />
					</motion.div>
				</section>
			)}
		</motion.div>
	);
};

export default CartMiniView;
