import type { Trending } from "@/api/movies/types";
import { create } from "zustand/react";

export type ListState = {
	list: Trending[];
	currentPage: number;
	totalPages: number;
};

export type ListActions = {
	setList: (list: Trending[]) => void;
	setCurrentPage: (page: number) => void;
	setTotalPages: (pages: number) => void;
	reset: () => void;
};

export type ListStore = ListState & ListActions;

export const defaultInitState: ListState = {
	list: [],
	currentPage: 1,
	totalPages: 1,
};

export const useListStore = create<ListStore>()((set) => ({
	...defaultInitState,
	setList: (list: Trending[]) =>
		set((state) => ({ list: [...state.list, ...list] })),
	setCurrentPage: (page: number) => set({ currentPage: page }),
	setTotalPages: (pages: number) => set({ totalPages: pages }),
	reset: () => set(defaultInitState),
}));
