import type { Genre, SpokenLanguage } from "@/api/movies/types";
import { Calendar, Languages, LayoutGrid, Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface InformationProps {
	details: {
		year: string;
		rating: number;
		genres: Genre[];
		status: string;
		spoken_languages: SpokenLanguage[];
	};
}

export default function Information({ details }: InformationProps) {
	return (
		<Card className="text-sm h-max">
			<CardContent className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<div className="flex flex-row items-center gap-2 text-white/50">
						<Calendar size={20} />
						<p>Release Year</p>
					</div>
					<p>{details.year.split("-")[0]}</p>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex flex-row items-center gap-2 text-white/50">
						<Languages size={20} />
						<p>Available Languages</p>
					</div>
					{details.spoken_languages.map((language) => (
						<p
							key={language.iso_639_1}
							className="bg-background border w-max p-1 rounded-md"
						>
							{language.name}
						</p>
					))}
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex flex-row items-center gap-2 text-white/50">
						<Star size={20} />
						<p>Rating</p>
					</div>
					<p>{details.rating}</p>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex flex-row items-center gap-2 text-white/50">
						<LayoutGrid size={20} />
						<p>Genres</p>
					</div>
					{details.genres.map((genre) => (
						<p
							key={genre.id}
							className="bg-background border w-max p-1 rounded-md"
						>
							{genre.name}
						</p>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
