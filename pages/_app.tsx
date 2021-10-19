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

function MyApp({ Component, pageProps, router }: AppProps) {
	const [cart, setCart] = useState<Item[]>([]);
	const [isGlobalMessage, setIsGlobalMessage] = useState<Boolean>(false);
	const [globalMessageText, setGlobalMessageText] = useState<string>("");
	const [globalMessageType, setGlobalMessageType] = useState<
		"WARNING" | "ALERT" | "NOTIFY"
	>("NOTIFY");
	const [globalMessageTimeout, setGlobalMessageTimeout] =
		useState<ReturnType<typeof setTimeout>>();

	const setGlobalMessage = ({ text, type }: GlobalMessageFuncType) => {
		globalMessageTimeout && clearTimeout(globalMessageTimeout);
		setGlobalMessageType(type);
		setGlobalMessageText(text);

		!isGlobalMessage && setIsGlobalMessage(true);

		setGlobalMessageTimeout(
			setTimeout(() => {
				setIsGlobalMessage(false);
			}, 3000)
		);
	};

	return (
		<Provider value={{ cart, setCart, setGlobalMessage }}>
			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					<React.Fragment key={router.route}>
						<Component {...pageProps} />
						<AnimatePresence exitBeforeEnter>
							{isGlobalMessage && (
								<GlobalMessage
									key={"GlobalMessage"}
									text={globalMessageText}
									type={globalMessageType}
								/>
							)}
						</AnimatePresence>
					</React.Fragment>
				</AnimatePresence>
			</AnimateSharedLayout>
		</Provider>
	);
}
export default MyApp;
