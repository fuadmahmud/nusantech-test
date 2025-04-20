import { test, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import Page from "@/app/page";

describe("Home page test", () => {
  test("Should render correctly", () => {
    render(<Page />);

    expect(screen.getByText("Nextjs Homepage")).toBeDefined();
  });
});
