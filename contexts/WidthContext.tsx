import { createContext, useContext, useEffect, useState } from "react";

interface Context {
	innerWidth: number;
}

const WidthContext = createContext<Context>({
	innerWidth: 0,
});

interface Props {
	children: JSX.Element;
}

const WidthContextProvider: React.FC<Props> = ({ children }) => {
	const [innerWidth, setInnerWidth] = useState(0);
	useEffect(() => {
		setInnerWidth(window.innerWidth);
		const temp = () => {
			setInnerWidth(window.innerWidth);
		};
		window.addEventListener("resize", temp);
		return () => window.removeEventListener("resize", temp);
	}, []);
	return (
		<WidthContext.Provider value={{ innerWidth }}>
			{children}
		</WidthContext.Provider>
	);
};
export default WidthContextProvider;
export const useWidth = () => useContext(WidthContext)
