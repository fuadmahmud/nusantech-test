import { getErrorMessage } from "./errorHandling";

interface ApiErrorResponse {
	message: string;
	[key: string]: unknown;
}

class ApiError extends Error {
	constructor(
		public message: string,
		public statusCode: number,
		public data: ApiErrorResponse,
	) {
		super(message);
		this.name = "ApiError";
	}
}

interface RequestOptions {
	headers?: Record<string, string>;
	params?: Record<string, string>;
}

class ApiClient {
	private baseUrl: string;
	private defaultHeaders: RequestInit["headers"];

	constructor(baseUrl: string, defaultHeaders: RequestInit["headers"]) {
		this.baseUrl = baseUrl;
		this.defaultHeaders = {
			"Content-Type": "application/json",
			...defaultHeaders,
		};
	}

	private async request<T>(
		method: string,
		url: string,
		data?: unknown,
		options: RequestOptions = {},
	): Promise<T> {
		try {
			const queryParams = options.params
				? `?${new URLSearchParams(options.params).toString()}`
				: "";

			const response = await fetch(this.baseUrl + url + queryParams, {
				method,
				headers: {
					...this.defaultHeaders,
					...options.headers,
				},
				body: data ? JSON.stringify(data) : undefined,
			});

			const responseData = await response.json();

			if (!response.ok) {
				const errorResponse: ApiErrorResponse = {
					message: responseData?.status_message || "An error occurred",
					...responseData,
				};

				throw new ApiError(
					errorResponse.message,
					response.status,
					errorResponse,
				);
			}

			return responseData;
		} catch (error) {
			if (error instanceof ApiError) {
				throw error;
			}
			const errorResponse: ApiErrorResponse = {
				message: getErrorMessage(error),
			};

			throw new ApiError(errorResponse.message, 500, errorResponse);
		}
	}

	async get<T>(url: string, options?: RequestOptions): Promise<T> {
		return this.request<T>("GET", url, undefined, options);
	}

	async post<T>(
		url: string,
		data: unknown,
		options?: RequestOptions,
	): Promise<T> {
		return this.request<T>("POST", url, data, options);
	}

	async put<T>(
		url: string,
		data: unknown,
		options?: RequestOptions,
	): Promise<T> {
		return this.request<T>("PUT", url, data, options);
	}

	async patch<T>(
		url: string,
		data: unknown,
		options?: RequestOptions,
	): Promise<T> {
		return this.request<T>("PATCH", url, data, options);
	}

	async delete<T>(url: string, options?: RequestOptions): Promise<T> {
		return this.request<T>("DELETE", url, undefined, options);
	}
}

const api = new ApiClient(process.env.NEXT_PUBLIC_TMDB_URL || "", {
	Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
});

export default api;
