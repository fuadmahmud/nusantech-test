import type { Season } from "./types";
import api from "@/utils/httpClient";

export async function getSeasons(
	id: number,
	season_number: string,
): Promise<Season> {
	const response = await api.get<Season>(
		`/tv/${id}/season/${season_number}?language=en-US`,
	);

	return response;
}
