import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
	request.json();
	let successful = false;
	let jwt;
	if (!successful) {
		// return validation errors
		return {
			status: 401,
			body: { error: "Not logged in " },
		};
	}
	return {
		status: 301,
		headers: {
			location: "/admin",
			"set-cookie": jwt,
		},
		body: {},
	};
};
