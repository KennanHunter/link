/// <reference types="@sveltejs/kit" />
/// <reference types="@sveltejs/adapter-cloudflare" />

declare namespace App {
	interface Platform {
		env?: {
			REDIRECT_DB: KVNamespace;
			ADMIN_USERNAME: string;
			ADMIN_PASSWORD: string;
		};
	}
}
