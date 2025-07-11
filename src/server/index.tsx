import { api } from "@/server/api";
import { Hono } from "hono";
import { renderToString } from "react-dom/server";

// This must be exported for the dev server to work
export const app = new Hono();

app.route("/api", api);

// Serves the main web application. This must come after the API route.
app.get("*", (c) => {
	// Along with the vite React plugin this enables HMR within react while
	// running the dev server.
	const { url } = c.req;
	const { origin } = new URL(url);
	const injectClientScript = `
    import RefreshRuntime from "${origin}/@react-refresh";
    RefreshRuntime.injectIntoGlobalHook(window);
    window.$RefreshReg$ = () => {};
    window.$RefreshSig$ = () => (type) => type;
    window.__vite_plugin_react_preamble_installed__ = true;
    `;
	const hmrScript = import.meta.env.DEV ? (
		<script type="module">{injectClientScript}</script>
	) : null;

	// Sets the correct path for static assets based on the environment.
	// The production paths are hard coded based on the output of the build script.
	const cssPath = import.meta.env.PROD
		? "/assets/index.css"
		: "/src/client/index.css";
	const clientScriptPath = import.meta.env.PROD
		? "/assets/client.js"
		: "/src/client/index.tsx";
	const wasmExecScriptPath = import.meta.env.PROD
		? "/assets/wasm_exec.js"
		: "/wasm_exec.js";
	const iconPath = import.meta.env.PROD ? "/assets/logo.svg" : "/logo.svg";

	return c.html(
		[
			"<!doctype html>",
			renderToString(
				<html lang="en">
					<head>
						<meta charSet="UTF-8" />
						<link rel="icon" type="image/svg+xml" href={iconPath} />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0"
						/>
						<title>Paramaters Playground</title>
						<link rel="stylesheet" href={cssPath} />
						{hmrScript}
						<script type="module" src={wasmExecScriptPath}></script>
					</head>
					<body>
						<div id="root"></div>
						<script type="module" src={clientScriptPath}></script>
					</body>
				</html>,
			),
		].join("\n"),
	);
});
