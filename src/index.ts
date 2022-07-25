import { htmlData } from "./htmlData";

export interface Env {
	LINK_DB: KVNamespace;
	WEBMASTER: string;
	WEBMASTER_LINK: string;
}

function HtmlResponse(html: string): Response {
	return new Response(html, {
		headers: {
			"content-type": "text/html;charset=UTF-8",
		},
	});
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const url = new URL(request.url);
		const key = url.pathname.substring(1);

		if (!key)
			return Response.redirect(
				"https://kennan.tech/blog/e/url-shortener-cloudflare"
			);

		// Look up the key from our redirect
		const redirectValue = await env.LINK_DB.get(key);

		// If the looked up value does not exist (null) return
		if (!redirectValue)
			return HtmlResponse(
				htmlData.error
					.replace("{WEBMASTER}", env.WEBMASTER)
					.replace("{WEBMASTER_LINK}", env.WEBMASTER_LINK)
					.replace("{VALUE}", url.pathname)
			);

		// Redirect to the looked up value
		return Response.redirect(redirectValue, 301);
	},
};
