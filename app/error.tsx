"use client";

import { Button } from "@/components/ui/button";

export default function ErrorComponent({
	error,
	reset,
}: { error: Error; reset: () => void }) {
	return (
		<div className="min-h-full p-4 flex flex-col gap-4 lg:p-8">
			<p className="text-2xl font-bold">Error</p>
			<p>{error.message}</p>
			<Button onClick={reset} className="w-max cursor-pointer" type="button">
				Try Again
			</Button>
		</div>
	);
}
