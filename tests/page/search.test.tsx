import { describe, test, expect } from "vitest";
import { act, render, screen } from "@testing-library/react";
import Search from "@/app/search/page";

describe("Search page", () => {
	test("Should render correctly", async () => {
		await act(async () => {
			render(<Search searchParams={{ s: "doraemon" }} />);
		});
		screen.debug();
	});
});
