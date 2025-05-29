"use client";

import { getMultiSearch } from "@/api/search";
import { useListStore } from "@/stores/list-stores";
import { TMDB_IMAGE_URL } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";

export default function SearchList({ keyword }: { keyword: string }) {
	const { ref, isIntersecting } = useIntersectionObserver();
	const {
		list,
		setList,
		currentPage,
		setCurrentPage,
		totalPages,
		setTotalPages,
		reset,
	} = useListStore((state) => state);

	const fetchMultiSearch = useCallback(
		async (page: number) => {
			if (keyword) {
				await getMultiSearch(keyword, page).then((res) => {
					setList(res.results);
					setCurrentPage(res.page);
					setTotalPages(res.total_pages);
				});
			}
		},
		[keyword, setCurrentPage, setList, setTotalPages],
	);

	useEffect(() => {
		fetchMultiSearch(1);

		return () => {
			reset();
		};
	}, []);

	useEffect(() => {
		if (keyword) {
			reset();
			fetchMultiSearch(1);
		}
	}, [keyword, fetchMultiSearch, reset]);

	useEffect(() => {
		const nextPage = currentPage + 1;
		if (isIntersecting && nextPage <= totalPages) {
			fetchMultiSearch(currentPage + 1);
		}
	}, [currentPage, fetchMultiSearch, isIntersecting, totalPages]);

	return (
		<div className="grid grid-cols-3 gap-4">
			{list.map((result, index) => {
				const image = result.poster_path || result.profile_path;
				const src = image
					? `${TMDB_IMAGE_URL}/w185/${image}`
					: "/assets/placeholder.jpg";

				return (
					<Link
						key={result.id}
						href={`/details/${result.media_type}/${result.id}`}
						ref={index === list.length - 1 ? ref : null}
					>
						<Image
							src={src}
							alt={result.title || result.name}
							height={200}
							width={185}
							className="rounded-sm w-full object-cover"
							quality={100}
						/>
					</Link>
				);
			})}
		</div>
	);
}
