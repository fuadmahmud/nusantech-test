import { Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "./button";

export default function Footer() {
	return (
		<footer className="grid grid-cols-2 lg:grid-cols-3 gap-5 p-4 lg:p-8">
			<ul className="text-sm">
				<li className="font-bold">Home</li>
				<li className="mt-2">Categories</li>
				<li className="mt-2">Trending</li>
				<li className="mt-2">Top Rated</li>
				<li className="mt-2">Upcoming</li>
			</ul>

			<ul className="text-sm">
				<li className="font-bold">Company</li>
				<li className="mt-2">About</li>
				<li className="mt-2">Blog</li>
				<li className="mt-2">Careers</li>
				<li className="mt-2">Contact</li>
			</ul>
			<ul className="text-sm">
				<li className="font-bold">Subscription</li>
				<li className="mt-2">Plans</li>
				<li className="mt-2">Payment</li>
			</ul>
			<div className="text-sm">
				<p className="font-bold">Follow Us</p>
				<div className="flex lg:flex-row flex-col gap-2 mt-2">
					<Button variant="outline" className="w-max">
						<Facebook />
					</Button>
					<Button variant="outline" className="w-max">
						<Twitter />
					</Button>
					<Button variant="outline" className="w-max">
						<Instagram />
					</Button>
				</div>
			</div>
		</footer>
	);
}
