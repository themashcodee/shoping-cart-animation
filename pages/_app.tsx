import "../styles/globals.css";
import React, {
	createContext,
	useState,
	Dispatch,
	SetStateAction,
} from "react";
import type { AppProps } from "next/app";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

import { Item, GlobalMessageFuncType } from "types/Item";
import GlobalMessage from "components/GlobalMessage";

type Context = {
	cart: Item[];
	setCart: Dispatch<SetStateAction<Item[]>>;
	setGlobalMessage: ({ text, type }: GlobalMessageFuncType) => void;
};

export const StoreContext = createContext<Context>({
	cart: [],
	setCart: () => {},
	setGlobalMessage: () => {},
});
const { Provider } = StoreContext;

let GlobalMessageTimeout: ReturnType<typeof setTimeout>;

function MyApp({ Component, pageProps }: AppProps) {
	const [cart, setCart] = useState<Item[]>([]);
	const [isGlobalMessage, setIsGlobalMessage] = useState<Boolean>(false);
	const [globalMessageText, setGlobalMessageText] = useState<string>("");
	const [globalMessageType, setGlobalMessageType] = useState<
		"WARNING" | "ALERT" | "NOTIFY"
	>("NOTIFY");

	const setGlobalMessage = ({ text, type }: GlobalMessageFuncType) => {
		clearTimeout(GlobalMessageTimeout);
		setGlobalMessageType(type);
		setGlobalMessageText(text);

		setIsGlobalMessage(true);

		GlobalMessageTimeout = setTimeout(() => {
			setIsGlobalMessage(false);
		}, 3000);
	};

	return (
		<Provider value={{ cart, setCart, setGlobalMessage }}>
			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					<>
						<Component {...pageProps} />
						{isGlobalMessage && (
							<GlobalMessage
								text={globalMessageText}
								type={globalMessageType}
							/>
						)}
					</>
				</AnimatePresence>
			</AnimateSharedLayout>
		</Provider>
	);
}
export default MyApp;
