import { Button } from "../ui/button";
import Image from "next/image";

export default function FreeTrial() {
	return (
		<div className="w-full h-[400px] relative">
			<Image
				src="/assets/preview.jpg"
				alt="preview"
				fill
				className="object-cover"
			/>
			<div className="rounded-lg p-4 absolute inset-0 z-10 flex flex-col justify-center items-center">
				<h3 className="text-2xl font-bold mb-4">Start your free trial</h3>
				<p className="text-sm text-secondary-foreground text-center">
					Watch unlimited movies and TV shows for 30 days.
				</p>
				<Button className="mt-4">Start Free Trial</Button>
			</div>
			<div className="opacity-75 bg-gradient-to-t from-black from-30% to-primary absolute h-full inset-0" />
		</div>
	);
}
