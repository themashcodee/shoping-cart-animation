import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
	url: string;
};

const ImageCont = ({ url }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 2 } }}
			className="w-full max-w-sm mx-auto flex-grow p-12"
		>
			{url && (
				<Image src={url} layout="responsive" width={800} height={400} alt="" />
			)}
		</motion.div>
	);
};

export default ImageCont;
