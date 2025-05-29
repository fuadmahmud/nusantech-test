import { vi } from "vitest";

// Mock server-only module
vi.mock("server-only", () => {
	return {};
});

// Mock next/navigation
vi.mock("next/navigation", () => {
	return {
		useRouter: () => ({
			push: vi.fn(),
			replace: vi.fn(),
			back: vi.fn(),
		}),
		useSearchParams: () => ({
			get: vi.fn(),
		}),
	};
});
