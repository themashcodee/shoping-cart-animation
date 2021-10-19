import { Variants } from "framer-motion";

type StaggerVariant = {
	delay?: number;
	direction?: number;
	childdelay?: number;
};

export const Stagger: Variants = {
	initial: {},
	animate: (custom: StaggerVariant | undefined) => {
		return {
			transition: {
				delayChildren: custom && custom.delay ? custom.delay : 0,
				staggerChildren: custom && custom.childdelay ? custom.childdelay : 0.1,
				when: "beforeChildren",
				staggerDirection: custom && custom.direction ? custom.direction : 1,
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
	exit: {
		scale: 0,
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
export const GlobalMessageAnim: Variants = {
	initial: {
		opacity: 0,
		y: "-100%",
		x: "-50%",
	},
	animate: {
		opacity: 1,
		x: "-50%",
		y: 0,
	},
	exit: {
		opacity: 0,
		y: "-100%",
		x: "-50%",
	},
};
export const CartMiniViewAnim: Variants = {
	initial: {
		height: 0,
	},
	expanded: {
		height: "96px",
	},
	minimized: {
		height: "16px",
	},
};
