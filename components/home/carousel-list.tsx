import { getMovieList } from "@/api/movies";
import type { MovieListQuery } from "@/api/movies/types";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { TMDB_IMAGE_URL } from "@/utils/constant";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronDown, Plus } from "lucide-react";
import Link from "next/link";

export default async function List({
	query,
	currentSearchParam,
}: {
	query: MovieListQuery;
	currentSearchParam?: string;
}) {
	const response = await getMovieList(query);
	const title = query
		.split("_")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
	const hidden = currentSearchParam !== query && currentSearchParam;

	return (
		<div className={cn("p-4 lg:p-8 lg:mx-auto max-w-full", hidden && "hidden")}>
			<h3 className="text-2xl font-bold mb-4">{title}</h3>
			<Carousel>
				<CarouselContent>
					{response.results.map((movie) => {
						return (
							<CarouselItem
								className="basis-1/2 md:basis-1/4 lg:basis-1/6"
								key={movie.id}
							>
								<Card className="pt-0 h-full flex flex-col">
									<CardContent className="p-0 flex-shrink-0">
										<Image
											src={`${TMDB_IMAGE_URL}/w185/${movie.poster_path}`}
											alt={movie.title}
											width={185}
											height={280}
											className="rounded-sm w-full h-auto object-cover"
											quality={100}
										/>
									</CardContent>
									<CardFooter className="p-0 px-2 flex flex-col gap-2 items-start flex-grow">
										<div className="flex flex-row items-center justify-between w-full">
											<Button className="rounded-full h-8 w-8">
												<Plus size={4} />
											</Button>
											<Button
												className="rounded-full h-8 w-8"
												variant="secondary"
												asChild
											>
												<Link href={`/details/movie/${movie.id}`}>
													<ChevronDown size={4} />
												</Link>
											</Button>
										</div>
										<h4 className="text-sm font-bold">{movie.title}</h4>
										<p className="text-xs text-muted-foreground">
											{movie.release_date.split("-")[0]}
										</p>
									</CardFooter>
								</Card>
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>
		</div>
	);
}
