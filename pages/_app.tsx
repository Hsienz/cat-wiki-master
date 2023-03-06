import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import WidthContextProvider from "@/contexts/WidthContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WidthContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</WidthContextProvider>
	);
}
