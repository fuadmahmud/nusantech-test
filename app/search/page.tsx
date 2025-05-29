import SearchList from "@/components/search/search-list";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { s: string };
}) {
	const { s } = await searchParams;

	return (
		<div className="p-4 lg:p-8 min-h-screen">
			<h3 className="text-2xl font-bold mb-4">Search Results for {s}</h3>
			<SearchList keyword={s} />
		</div>
	);
}
