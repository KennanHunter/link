import { htmlData } from "./htmlData";

export interface Env {
	LINK_DB: KVNamespace;
	WEBMASTER: string;
	WEBMASTER_LINK: string;
}

function HtmlResponse(html: string, code = 200): Response {
	return new Response(html, {
		status: code,
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
		let redirectValue: string | null;

		if (!key)
			return Response.redirect(
				"https://kennan.tech/blog/e/url-shortener-cloudflare",
				301
			);

		// Look up the key from our redirect
		try {
			redirectValue = await env.LINK_DB.get(key);
		} catch {
			return HtmlResponse(
				htmlData.internalError
					.replace("{WEBMASTER}", env.WEBMASTER)
					.replace("{WEBMASTER_LINK}", env.WEBMASTER_LINK)
					.replace("{VALUE}", url.pathname),
				500
			);
		}

		// If the looked up value does not exist (null) return
		if (!redirectValue)
			return HtmlResponse(
				htmlData.error
					.replace("{WEBMASTER}", env.WEBMASTER)
					.replace("{WEBMASTER_LINK}", env.WEBMASTER_LINK)
					.replace("{VALUE}", url.pathname),
				404
			);

		// Redirect to the looked up value
		return Response.redirect(redirectValue, 301);
	},
};
