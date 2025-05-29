import { getMovie } from "@/api/movies";
import FreeTrial from "@/components/details/free-trial";
import Information from "@/components/details/information";
import Hero from "@/components/home/hero";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	const movie = await getMovie(id);

	return {
		title: `${movie.title} - Movie Next App`,
		description: movie.overview,
	};
}

export default async function Details({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	const movie = await getMovie(id);

	return (
		<>
			<Hero
				trending={{
					backdrop_path: movie.backdrop_path,
					name: movie.title,
					overview: movie.overview,
					media_type: "movie",
					id: movie.id,
				}}
			/>

			<div className="p-4 grid grid-cols-1 gap-4 lg:grid-cols-[3fr_1fr]">
				<Card className="max-h-max">
					<CardHeader className="text-white/50">Overview</CardHeader>
					<CardContent>
						<p>{movie.overview}</p>
					</CardContent>
				</Card>
				<Information
					details={{
						year: movie.release_date,
						rating: movie.vote_average,
						genres: movie.genres,
						status: movie.status,
						spoken_languages: movie.spoken_languages,
					}}
				/>
			</div>
			<div className="p-4 lg:p-8 lg:mx-auto w-full">
				<FreeTrial />
			</div>
		</>
	);
}
