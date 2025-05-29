import { getTV } from "@/api/tv";
import FreeTrial from "@/components/details/free-trial";
import Information from "@/components/details/information";
import Seasons from "@/components/details/seasons";
import Hero from "@/components/home/hero";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	const tv = await getTV(id);

	return {
		title: `${tv.name} - Movie Next App`,
		description: tv.overview,
	};
}

export default async function Details({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	const tv = await getTV(id);

	return (
		<>
			<Hero
				trending={{
					backdrop_path: tv.backdrop_path,
					name: tv.name,
					overview: tv.overview,
					media_type: "tv",
					id: tv.id,
				}}
				from_details
			/>

			<div className="p-4 grid grid-cols-1 gap-4 lg:grid-cols-[3fr_1fr] lg:p-8">
				<Seasons tv={tv} />
				<Information
					details={{
						year: tv.first_air_date,
						rating: tv.vote_average,
						genres: tv.genres,
						status: tv.status,
						spoken_languages: tv.spoken_languages,
					}}
				/>
				<Card className="">
					<CardHeader className="text-white/50">Overview</CardHeader>
					<CardContent>
						<p>{tv.overview}</p>
					</CardContent>
				</Card>
			</div>
			<FreeTrial />
		</>
	);
}
