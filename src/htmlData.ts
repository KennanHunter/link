export const htmlData = {
	error: `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Error</title>
	</head>
	<body>
		<style>
			main {
				text-align: center;
				color: #ebdbb2;
			}
			a {
				color: #458588;
			}
			body {
				background-color: #282828;
				margin: 0;
				font-size: larger;
			}
		</style>
		<main>
			<h1 style="margin: 1em; font-size: 3em">:(</h1>
			<h1>An Error has Occurred</h1>
			<p>
				Your redirect value <strong>{VALUE}</strong> does not appear
				to point to a valid URL
			</p>
			<p>
				<a href="{WEBMASTER_LINK}"
					>If this appears to be an error, contact
					<strong>{WEBMASTER}</strong></a
				>
			</p>
		</main>
	</body>
</html>
	  `,
	internalError: `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Error</title>
	</head>
	<body>
		<style>
			main {
				text-align: center;
				color: #ebdbb2;
			}
			a {
				color: #458588;
			}
			body {
				background-color: #282828;
				margin: 0;
				font-size: larger;
			}
		</style>
		<main>
			<h1 style="margin: 1em; font-size: 3em">:(</h1>
			<h1>An Internal Error has Occurred</h1>
			<p>
				Our server has experienced an internal Error
			</p>
			<p>
				<a href="{WEBMASTER_LINK}"
					>If the problem persists, contact
					<strong>{WEBMASTER}</strong></a
				>
			</p>
		</main>
	</body>
</html>
`,
};
