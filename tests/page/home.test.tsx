import { test, expect, describe, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import Page from "@/app/page";

// Mock the movie API
vi.mock("@/api/movies", () => ({
	getMovieList: vi.fn().mockResolvedValue({
		results: [],
		page: 1,
		total_pages: 1,
		total_results: 0,
	}),
	getTrending: vi.fn().mockResolvedValue({
		results: [
			{
				id: 1,
				title: "Test Movie",
				overview: "Test Overview",
				poster_path: "/test.jpg",
				backdrop_path: "/test.jpg",
				release_date: "2024-01-01",
			},
		],
		page: 1,
		total_pages: 1,
		total_results: 1,
	}),
}));

describe("Home page test", () => {
	test("Should render correctly", () => {
		render(<Page searchParams={{ q: "" }} />);
		screen.debug();

		expect(screen.getByText("Now Playing")).toBeDefined();
		expect(screen.getByText("Popular")).toBeDefined();
		expect(screen.getByText("Top Rated")).toBeDefined();
		expect(screen.getByText("Upcoming")).toBeDefined();
	});

	// test("Should render based on query", async () => {
	// 	render(await Page({ searchParams: { q: "popular" } }));

	// 	expect(screen.getByText("Popular")).toBeDefined();
	// 	expect(screen.queryByText("Now Playing")).toBeNull();
	// 	expect(screen.queryByText("Top Rated")).toBeNull();
	// 	expect(screen.queryByText("Upcoming")).toBeNull();
	// });
});
