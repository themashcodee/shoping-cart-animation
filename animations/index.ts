import { Variants } from "framer-motion";

export const Stagger: Variants = {
	animate: (delayChildren: number = 0) => {
		return {
			transition: {
				delayChildren,
				staggerChildren: 0.1,
				when: "beforeChildren",
			},
		};
	},
};
export const AppearY: Variants = {
	initial: {
		opacity: 0,
		y: "40%",
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};
export const AppearX: Variants = {
	initial: {
		opacity: 0,
		x: "40%",
	},
	animate: {
		opacity: 1,
		x: 0,
	},
};
