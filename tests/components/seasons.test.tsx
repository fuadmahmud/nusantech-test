import { describe, test, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Seasons from "@/components/details/seasons";
import { mockSeason, mockTV } from "../mocks/props";

describe("Seasons component", () => {
	test("Should render empty selected season", () => {
		render(<Seasons tv={mockTV} />);

		expect(screen.getByText("Select a season")).toBeDefined();
		expect(
			screen.getByText("Select a season to see the episodes"),
		).toBeDefined();
	});

	test("Should render season details when selected", async () => {
		render(<Seasons tv={mockTV} />);

		// Open the select dropdown
		const selectButton = screen.getByRole("combobox");
		await userEvent.click(selectButton);

		// Select Season 1
		const season1Option = screen.getByText("Season 1");
		await userEvent.click(season1Option);
	});
});
