import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useWidth } from "@/contexts/WidthContext";
const Preview = () => {
	const { innerWidth } = useWidth();
	const [imageTag, setImageTag] = useState("sm");
	useEffect(() => {
		if (innerWidth <= 640) setImageTag("sm");
		else if (innerWidth <= 724) setImageTag("md");
		else setImageTag("lg");
	}, [innerWidth]);
	return (
		<div className="bg-yellow rounded-3xl overflow-hidden mt-10">
			<Image
				src={`/assets/HeroImage${imageTag}.png`}
				className="!relative"
				alt=""
				fill={true}
				style={{ objectFit: "contain" }}
			/>
			<div className="pt-24 pb-20 px-16">
				<h2 className="text-4xl lg:text-5xl font-bold w-[540px]">66+ Breeds For you to discover</h2>
			</div>
		</div>
	);
};

export default Preview;
