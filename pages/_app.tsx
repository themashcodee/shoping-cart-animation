import "../styles/globals.css";
import React, {
	createContext,
	useState,
	Dispatch,
	SetStateAction,
} from "react";
import type { AppProps } from "next/app";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

import { Item } from "types/Item";

type Context = {
	cart: Item[];
	setCart: Dispatch<SetStateAction<Item[]>>;
};
export const StoreContext = createContext<Context>({
	cart: [],
	setCart: () => {},
});
const { Provider } = StoreContext;

function MyApp({ Component, pageProps }: AppProps) {
	const [cart, setCart] = useState<Item[]>([]);

	return (
		<Provider value={{ cart, setCart }}>
			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} />
				</AnimatePresence>
			</AnimateSharedLayout>
		</Provider>
	);
}
export default MyApp;
