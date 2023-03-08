import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useWidth } from "@/contexts/WidthContext";
import Logo from "../public/assets/CatwikiLogo.svg";
import Search from "./Search";
import useSWR from "swr";
import axios from "axios";
import { useBreed } from "@/contexts/BreedContext";
const Preview = () => {
	const { innerWidth } = useWidth();
	const [imageTag, setImageTag] = useState("sm");
	const { breed, isLoadingBreed } = useBreed();
	const [breedId, setBreedId] = useState("");
	const fetcher = (url: string) => axios.get(url).then((res) => res.data);
	const { data, isLoading, error } = useSWR(
		`https://api.thecatapi.com/v1/images/search?limit=4&breed_ids=${breedId}&api_key=live_TS17jVuKYw92HhAUFEpB9i5WtPxA1ssZKv04CSOWv9pdzhJiWlAMlfNaXNhpVXgh`,
		fetcher
	);
	useEffect(() => {
		if (innerWidth >= 1024) setImageTag("lg");
		else if (innerWidth >= 768) setImageTag("md");
		else setImageTag("sm");
	}, [innerWidth]);
	return (
		<div className="mt-10 overflow-hidden bg-yellow rounded-3xl">
			<div className="relative">
				<Image
					src={`/assets/HeroImage${imageTag}.png`}
					className="!relative"
					alt=""
					fill={true}
					style={{ objectFit: "contain" }}
					draggable={false}
				/>
				<div className="absolute top-0 left-0 pt-16 pl-16 text-white w-[380px]">
					<Image
						src="/assets/CatwikiLogo.svg"
						className="brightness-[10000%]"
						alt=""
						width={250}
						height={100}
						draggable={false}
					/>
					<p className="text-[24px]">
						Get to know more about your cat breed
					</p>
					{!isLoadingBreed && (
						<Search
							options={breed.map((x: any) => {
								return { value: x.id, name: x.name };
							})}
							breedId={breedId}
							setBreedId={setBreedId}
						/>
					)}
					{!isLoading && breedId && (
						<div className="flex gap-4 absolute">
							{data.map((x: any) => (
								<div key={x.id} className="h-32 w-32 overflow-hidden relative aspect-square rounded-xl">
									<Image
										src={x.url}
										alt=""
										fill={true}
										style={{objectFit:'cover'}}
										className="!relative"
									/>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			<div className="px-16 pt-24 pb-20">
				<h2 className="text-4xl lg:text-5xl font-bold w-[540px]">
					66+ Breeds For you to discover
				</h2>
			</div>
		</div>
	);
};

export default Preview;
