import type { Genre, SpokenLanguage } from "../movies/types";

export interface TV {
	adult: boolean;
	backdrop_path: string;
	created_by: Array<{
		id: number;
		credit_id: string;
		name: string;
		original_name: string;
		gender: number;
		profile_path: string;
	}>;
	episode_run_time: Array<number>;
	first_air_date: string;
	genres: Array<Genre>;
	homepage: string;
	id: number;
	in_production: boolean;
	languages: Array<string>;
	last_air_date: string;
	last_episode_to_air: {
		id: number;
		name: string;
		overview: string;
		vote_average: number;
		vote_count: number;
		air_date: string;
		episode_number: number;
		episode_type: string;
		production_code: string;
		runtime: number;
		season_number: number;
		show_id: number;
		still_path: string;
	};
	name: string;
	next_episode_to_air: any;
	networks: Array<{
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}>;
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: Array<string>;
	original_language: string;
	original_name: string;
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
	seasons: Array<{
		air_date: string;
		episode_count: number;
		id: number;
		name: string;
		overview: string;
		poster_path: string;
		season_number: number;
		vote_average: number;
	}>;
	spoken_languages: Array<SpokenLanguage>;
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
}

export interface Season {
	_id: string;
	air_date: string;
	episodes: Array<{
		air_date: string;
		episode_number: number;
		episode_type: string;
		id: number;
		name: string;
		overview: string;
		production_code: string;
		runtime: number;
		season_number: number;
		show_id: number;
		still_path: string;
		vote_average: number;
		vote_count: number;
		crew: Array<{
			department: string;
			job: string;
			credit_id: string;
			adult: boolean;
			gender: number;
			id: number;
			known_for_department: string;
			name: string;
			original_name: string;
			popularity: number;
			profile_path: string;
		}>;
		guest_stars: Array<{
			character: string;
			credit_id: string;
			order: number;
			adult: boolean;
			gender: number;
			id: number;
			known_for_department: string;
			name: string;
			original_name: string;
			popularity: number;
			profile_path: string;
		}>;
	}>;
	name: string;
	overview: string;
	id: number;
	poster_path: string;
	season_number: number;
	vote_average: number;
}
