export type Item = {
	id: number;
	image: string;
	name: string;
	price: number;
	quantity: number;
};

export type GlobalMessageFuncType = {
	text: string;
	type: "WARNING" | "ALERT" | "NOTIFY";
};
