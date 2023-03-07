import Head from "next/head";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Preview from "@/components/Preview";
import SearchContextProvider from "@/contexts/SearchContext";

const montserrat = Montserrat({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${montserrat.className} text-brown`}>
				<SearchContextProvider>
					<Preview />
				</SearchContextProvider>
			</main>
		</>
	);
}
