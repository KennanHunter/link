export interface Env {
	LINK_DB: KVNamespace;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const { pathname, origin } = new URL(request.url);
		if (!pathname.substring(1)) return new Response("epic");
		else if (pathname.substring(1) == "error")
			return new Response("An error has occured");
		else {
			return Response.redirect(
				(await env.LINK_DB.get(pathname.substring(1))) ||
					origin + "/error",
				302
			);
		}
	},
};
