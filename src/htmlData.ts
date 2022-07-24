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
				display: grid;
				grid-template-columns: auto auto auto;
				text-align: center;
				color: #ebdbb2;
			}
			a {
				color: #458588;
			}
			a:visited {
				color: #83a598;
			}
			body {
				background-color: #282828;
				margin: 0;
				font-size: larger;
			}
			.flex {
				display: flex;
				flex-direction: column;
				grid-column-start: 2;
			}
		</style>
		<main>
			<div class="flex">
				<div class="error">
					<h1 style="margin: 1em; font-size: 3em">:(</h1>
					<h1>An Error has Occurred</h1>
				</div>
				<div class="desc">
					<p>
						Your redirect value <strong>{VALUE}</strong> does not appear to point to
						a valid URL
					</p>
					<p>
						<a href="{WEBMASTERLINK}"
							>If this appears to be an error, contact
							<strong>{WEBMASTER}</strong></a
						>
					</p>
				</div>
			</div>
		</main>
	</body>
</html>
`,
};
