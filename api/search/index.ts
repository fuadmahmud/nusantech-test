import api from "@/utils/httpClient";
import type { TrendingResponse } from "../movies/types";

export async function getMultiSearch(
	query: string,
	page = 1,
): Promise<TrendingResponse> {
	const response = await api.get<TrendingResponse>(
		`/search/multi?query=${query}&language=en-US&page=${page}`,
	);

	if (response.results.length > 0) {
		const results = response.results.filter(
			(result) => result.media_type === "movie" || result.media_type === "tv",
		);

		return {
			...response,
			results,
		};
	}

	return response;
}
