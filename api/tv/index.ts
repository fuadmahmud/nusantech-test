import api from "@/utils/httpClient";

import "server-only";
import type { TV } from "./types";

export async function getTV(id: string): Promise<TV> {
	const response = await api.get<TV>(`/tv/${id}?language=en-US`);

	return response;
}
