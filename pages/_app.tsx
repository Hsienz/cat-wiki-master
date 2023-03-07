import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import WidthContextProvider from "@/contexts/WidthContext";
import BreedContextProvider from "@/contexts/BreedContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WidthContextProvider>
			<BreedContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</BreedContextProvider>
		</WidthContextProvider>
	);
}
