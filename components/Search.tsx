import { useSearch } from "@/contexts/SearchContext";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconSearch from "../public/assets/search_FILL0_wght400_GRAD0_opsz48.svg";
import useSWR from "swr";
import axios from "axios";
interface Props {
	options?: { value: string; name: string }[];
  breedId : string,
  setBreedId: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<Props> = ({ options, breedId, setBreedId }) => {
	const { search, setSearch } = useSearch();
	const [focus, setFocus] = useState(false);
	const setBreed = (breed: string) => {
		setSearch((x) => breed);
		options?.some((x) => {
			if (x.name === breed) {
				setBreedId(breedId => x.value);
        console.log(x.value)
				return true;
			}
			return false;
		});
	};
	const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		console.log("click");
		const temp = e.target as HTMLInputElement;
		setBreed(temp.innerText);
	};
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		console.log("change");
		setBreed(e.target.value);
	};
	return (
		<div className="text-brown relative">
			<div className="relative bg-white rounded-full flex px-4">
				<input
					type="text"
					value={search}
					onChange={handleChange}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					className="py-3 w-full outline-none rounded-full"
				/>
				<div className="h-full flex items-center my-auto">
					<IconSearch fill="#291507" width={24} height={24} />
				</div>
			</div>
			<AnimatePresence>
				{focus && (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 50 }}
						className="bg-white max-h-[180px] overflow-y-scroll scrollbar-hide w-full flex flex-col mt-4 rounded-3xl px-1 py-2 absolute z-50"
					>
						{options
							?.filter((x) => x.name.includes(search))
							.map((x) => (
								<motion.button
									className="py-3 rounded-xl hover:bg-[rgba(156,156,156,0.1)]"
									key={x.name}
									onMouseDown={handleClick}
								>
									{x.name}
								</motion.button>
							))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Search;
