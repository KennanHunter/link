/** @type {import('./__types/[slug]').RequestHandler} */
export async function GET({ params }: { params: { slug: string } }) {
	return {
		status: 308,
		headers: {
			Location: "https://google.com",
		},
		body: {
			number: Math.random(),
		},
	};
}
