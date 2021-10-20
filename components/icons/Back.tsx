import React from "react";

interface Props {}

const Back = (props: Props) => {
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
				d="M10 19l-7-7m0 0l7-7m-7 7h18"
			/>
		</svg>
	);
};

export default Back;
