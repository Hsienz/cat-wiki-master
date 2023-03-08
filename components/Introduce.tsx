import React from "react";
import Image from "next/image";
import Link from "next/link";
const Introduce = () => {
	return (
		<div className="flex flex-col lg:flex-row-reverse lg:justify-between">
			<div className="flex gap-4">
				<div className="relative flex flex-col gap-[inherit]">
					<Image
						src="/assets/image 2.png"
						className="!relative"
						alt=""
						draggable={false}
						width={200}
						height={100}
						style={{ objectFit: "contain" }}
					/>
					<Image
						src="/assets/image 1.png"
						className="!relative ml-auto"
						alt=""
						draggable={false}
						width={150}
						height={250}
						style={{ objectFit: "contain" }}
					/>
				</div>
				<Image
					src="/assets/image 3.png"
					className="!relative mb-auto"
					alt=""
					draggable={false}
					width={180}
					height={200}
					style={{ objectFit: "contain" }}
				/>
			</div>
			<div className="lg:w-[430px] my-auto">
				<div className="bg-brown w-16 h-1 mb-4"></div>
				<h2 className="text-5xl font-bold">
					Why should you have a cat?
				</h2>
				<p className="mt-12">
					Having a cat around you can actually trigger the release of
					calming chemicals in your body which lower your stress and
					anxiety leves
				</p>
<div className="mt-16">                <Link href="#">READ MORE</Link></div>
			</div>
		</div>
	);
};

export default Introduce;
