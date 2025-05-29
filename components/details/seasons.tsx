"use client";

import { getSeasons } from "@/api/tv/client";
import { useEffect, useState } from "react";
import type { Season, TV } from "@/api/tv/types";
import { Card, CardContent, CardTitle } from "../ui/card";
import {
	Select,
	SelectItem,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";
import Image from "next/image";
import { TMDB_IMAGE_URL } from "@/utils/constant";

export default function Seasons({
	tv,
}: {
	tv: TV;
}) {
	const [selectedSeason, setSelectedSeason] = useState<string>("");
	const [seasonData, setSeasonData] = useState<Season | null>(null);
	console.log(seasonData);

	useEffect(() => {
		if (selectedSeason) {
			getSeasons(tv.id, selectedSeason).then((data) => setSeasonData(data));
		}
	}, [selectedSeason, tv.id]);

	return (
		<Card>
			<CardContent>
				<Select onValueChange={setSelectedSeason} value={selectedSeason}>
					<SelectTrigger>
						<SelectValue placeholder="Select a season" />
					</SelectTrigger>
					<SelectContent>
						{tv.seasons.map((season) => (
							<SelectItem
								key={season.id}
								value={season.season_number.toString()}
							>
								{season.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				{seasonData ? (
					<Card className="mt-4 bg-background">
						<CardContent>
							<CardTitle className="flex flex-row items-center gap-2">
								<h4 className="text-lg font-bold">
									Season {seasonData.season_number}
								</h4>
								<p className="font-normal text-muted-foreground">
									Episodes {seasonData.episodes.length}
								</p>
							</CardTitle>
							<Accordion collapsible type="single">
								{seasonData.episodes.map((episode) => (
									<AccordionItem key={episode.id} value={episode.id.toString()}>
										<AccordionTrigger>{episode.name}</AccordionTrigger>
										<AccordionContent>
											<Image
												src={`${TMDB_IMAGE_URL}/w185/${episode.still_path}`}
												alt={episode.name}
												width={185}
												height={118}
												className="rounded-sm w-full h-auto object-cover mb-2"
											/>
											{episode.overview}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</CardContent>
					</Card>
				) : (
					<h4 className="text-center text-2xl font-bold mt-8">
						Select a season to see the episodes
					</h4>
				)}
			</CardContent>
		</Card>
	);
}
