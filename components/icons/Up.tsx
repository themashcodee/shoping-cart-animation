import React from "react";

interface Props {}

const Up = (props: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-full w-full"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M5 15l7-7 7 7"
			/>
		</svg>
	);
};

export default Up;
