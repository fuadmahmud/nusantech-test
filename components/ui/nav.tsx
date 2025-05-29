import { Button } from "./button";
import Link from "next/link";

export function Nav({ className }: { className?: string }) {
	return (
		<nav className={className}>
			<ul className="flex lg:flex-row lg:items-center gap-4 flex-col items-start">
				<Button asChild variant="ghost" className="cursor-pointer">
					<li>
						<Link href="/?q=now_playing">Now Playing</Link>
					</li>
				</Button>
				<Button asChild variant="ghost" className="cursor-pointer">
					<li>
						<Link href="/?q=popular">Popular</Link>
					</li>
				</Button>
				<Button asChild variant="ghost" className="cursor-pointer">
					<li>
						<Link href="/?q=top_rated">Top Rated</Link>
					</li>
				</Button>
				<Button asChild variant="ghost" className="cursor-pointer">
					<li>
						<Link href="?q=upcoming">Upcoming</Link>
					</li>
				</Button>
			</ul>
		</nav>
	);
}
