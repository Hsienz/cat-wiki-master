import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import WidthContextProvider from "@/contexts/WidthContext";
import BreedsContextProvider from "@/contexts/BreedsContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WidthContextProvider>
			<BreedsContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</BreedsContextProvider>
		</WidthContextProvider>
	);
}
