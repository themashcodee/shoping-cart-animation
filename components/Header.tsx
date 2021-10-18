import React from "react";
import Search from "@/components/icons/Search";
import User from "@/components/icons/User";

interface Props {}

const Header = (props: Props) => {
	return (
		<header className="flex px-8  justify-between w-full h-14 items-center">
			<div className="text-3xl font-semibold">Cart</div>
			<div className="w-6 h-6">
				<Search />
			</div>
		</header>
	);
};

export default Header;
