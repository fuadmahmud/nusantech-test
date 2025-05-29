import { TMDB_IMAGE_URL } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Play, Plus, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
	trending: {
		backdrop_path: string;
		name: string;
		overview: string;
		media_type: string;
		id: number;
	};
	from_details?: boolean;
}

export default async function Hero({ trending, from_details }: HeroProps) {
	return (
		<div className="relative h-[500px] w-full">
			<Image
				src={`${TMDB_IMAGE_URL}/w1280/${trending.backdrop_path}`}
				alt={trending.name}
				fill
				priority
				className="object-cover"
				quality={100}
			/>
			<div className="flex flex-col justify-center items-center absolute bottom-1/6 left-0 right-0">
				<h1 className="font-bold text-4xl md:text-5xl p-4 text-white text-center">
					{trending.name}
				</h1>
				<p
					className={cn(
						"hidden text-sm text-white/75 max-w-3/4 text-clip",
						!from_details && "lg:block",
					)}
				>
					{trending.overview}
				</p>
				<Button className="w-5/6 md:w-1/2 mt-4" asChild>
					<Link href={`/details/${trending.media_type}/${trending.id}`}>
						<Play />
						Play Now
					</Link>
				</Button>
				<div className="flex flex-row gap-2 mt-4">
					<Button variant="outline">
						<Plus />
					</Button>
					<Button variant="outline">
						<ThumbsUp />
					</Button>
				</div>
			</div>
			<div className="absolute h-1/4 bottom-0 left-0 right-0 bg-linear-to-t/decreasing from-background to-transparent" />
		</div>
	);
}
