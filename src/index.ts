import { htmlData } from "./htmlData";

export interface Env {
	LINK_DB: KVNamespace;
	WEBMASTER: string;
	WEBMASTERLINK: string;
}

async function HtmlResponse(html: string) {
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
		let { pathname, origin } = new URL(request.url);
		pathname = pathname.substring(1);
		if (!pathname)
			return Response.redirect("https://kennan.tech/link", 302);
		else {
			const val = await env.LINK_DB.get(pathname);
			if (val) {
				return Response.redirect(val, 302);
			} else {
				return HtmlResponse(
					htmlData.error
						.replace("{WEBMASTER}", env.WEBMASTER)
						.replace("{WEBMASTERLINK}", env.WEBMASTERLINK)
						.replace("{VALUE}", "/" + pathname)
				);
			}
		}
	},
};
