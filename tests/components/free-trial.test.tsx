import { test, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import FreeTrial from "@/components/details/free-trial";

describe("Free Trial component", () => {
	test("Should render correctly", () => {
		render(<FreeTrial />);

		expect(screen.getByText("Start your free trial")).toBeDefined();
		expect(screen.getByText("Start Free Trial")).toBeDefined();
		expect(
			screen.getByText("Watch unlimited movies and TV shows for 30 days."),
		).toBeDefined();
	});
});
