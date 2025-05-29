import { getTrending } from "@/api/movies";
import Hero from "@/components/home/hero";
import List from "@/components/home/carousel-list";

export default async function Home({
	searchParams,
}: { searchParams: { q: string } }) {
	const { q } = await searchParams;

	const response = await getTrending();
	const trending = response.results[0] || {};

	return (
		<>
			<Hero
				trending={{
					...trending,
					name: trending.name || trending.title,
				}}
			/>
			<List query="now_playing" currentSearchParam={q} />
			<List query="popular" currentSearchParam={q} />
			<List query="top_rated" currentSearchParam={q} />
			<List query="upcoming" currentSearchParam={q} />
		</>
	);
}
