import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="px-16">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
