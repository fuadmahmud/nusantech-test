export interface TrendingResponse {
	page: number;
	results: Array<Trending>;
	total_pages: number;
	total_results: number;
}

export interface MovieListResponse {
	dates: {
		maximum: string;
		minimum: string;
	};
	page: number;
	results: Array<MovieList>;
}

export interface Trending {
	backdrop_path: string;
	id: number;
	name: string;
	original_name: string;
	overview: string;
	poster_path: string;
	media_type: string;
	adult: boolean;
	original_language: string;
	genre_ids: Array<number>;
	popularity: number;
	first_air_date: string;
	vote_average: number;
	vote_count: number;
	origin_country: Array<string>;
	title: string;
	profile_path: string;
}

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: {
		id: number;
		name: string;
		poster_path: string;
		backdrop_path: string;
	};
	budget: number;
	genres: Array<Genre>;
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: Array<string>;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: Array<{
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}>;
	production_countries: Array<{
		iso_3166_1: string;
		name: string;
	}>;
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: Array<SpokenLanguage>;
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface MovieList {
	adult: boolean;
	backdrop_path: string;
	genre_ids: Array<number>;
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export type MovieListQuery =
	| "now_playing"
	| "popular"
	| "top_rated"
	| "upcoming";

export interface Genre {
	name: string;
	id: number;
}

export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}
