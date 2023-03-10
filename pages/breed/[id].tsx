import { useBreeds as useBreeds } from "@/contexts/BreedsContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Breed = () => {
	const router = useRouter();
	const { id } = router.query;
	const { breeds, isLoadingBreed } = useBreeds();
	const [breed, setBreed] = useState<any>();
	useEffect(() => {
		if (!isLoadingBreed)
			setBreed((_: any) => breeds.filter((x: any) => x.id == id)[0]);
	}, [isLoadingBreed]);
	useEffect(() => {
		console.log(breed);
	}, [breed]);
	return (
		<div>
			{breed && (
				<div className="flex gap-16">
					<div className="relative w-96 rounded-3xl overflow-hidden aspect-square">
						<Image
							src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
							alt=""
							fill={true}
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div>
						<h2>{breed.name}</h2>
						<p>{breed.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Breed;
