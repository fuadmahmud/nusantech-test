import api from "@/utils/httpClient";

import "server-only";
import type {
	TrendingResponse,
	Movie,
	MovieListResponse,
	MovieListQuery,
} from "./types";

export async function getTrending(): Promise<TrendingResponse> {
	const response = await api.get<TrendingResponse>("/trending/all/day");

	return response;
}

export async function getMovie(id: string): Promise<Movie> {
	const response = await api.get<Movie>(`/movie/${id}?language=en-US`);

	return response;
}

export async function getMovieList(
	q: MovieListQuery,
	page = 1,
): Promise<MovieListResponse> {
	const response = await api.get<MovieListResponse>(
		`/movie/${q}?language=en-US&page=${page}`,
	);

	return response;
}
