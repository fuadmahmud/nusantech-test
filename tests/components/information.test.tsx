import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Information from "@/components/details/information";

describe("Information component", () => {
	test("Should render correctly", () => {
		render(
			<Information
				details={{
					year: "2024-01-01",
					rating: 8.5,
					genres: [{ id: 1, name: "Action" }],
					status: "Released",
					spoken_languages: [
						{ iso_639_1: "en", name: "English", english_name: "English" },
					],
				}}
			/>,
		);

		expect(screen.getByText("2024")).toBeDefined();
		expect(screen.getByText("8.5")).toBeDefined();
		expect(screen.getByText("Release Year")).toBeDefined();
		expect(screen.getByText("Action")).toBeDefined();
		expect(screen.getByText("English")).toBeDefined();
	});
});
