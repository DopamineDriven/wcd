const withPlugins = require("next-compose-plugins");
// const withTypescript = require("@zeit/next-typescript");
// const withCSS = require("@zeit/next-css");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const nextRuntimeDotenv = require("next-runtime-dotenv");
const task = process.env.npm_lifecycle_event.startsWith("pre")
	? process.env.npm_lifecycle_event.slice(3)
	: process.env.npm_lifecycle_event;
const packageJSON = require("./package.json");
const { on, argv } = require("process");
const availableEnvironments = Object.keys(packageJSON.scripts)
	.filter((key) => key.startsWith(task))
	.map((key) => key.split(":")[1])
	.filter((key) => key);


const withConfig = nextRuntimeDotenv({
	server: ["DB_USER", "DB_PASSWORD", "DB_CLUSTER"]
});

const nextConfig = {
	analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
	analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
	bundleAnalyzerConfig: {
		server: {
			analyzerMode: "static",
			reportFilename: "../bundles/server.html"
		},
		browser: {
			analyzerMode: "static",
			reportFilename: "../bundles/client.html"
		}
	},
	publicRuntimeConfig: {
		NODE_ENV: process.env.NODE_ENV,
		DB_USER: process.env.DB_USER,
		DB_PASSWORD: process.env.DB_PASSWORD,
		DB_CLUSTER: process.env.DB_CLUSTER,
		DB_URL: process.env.DB_URI
	}
};


module.exports = {
	pageExtensions: ["json", "jsx", "js", "ts", "tsx", "cjs"]
};

module.exports = withConfig(
	withPlugins(
		[
			// [withCSS],
			// [
			// 	withTypescript({
			// 		webpack(config, _options) {
			// 			return config;
			// 		}
			// 	})
			// ],
			[
				withBundleAnalyzer({
					enabled: process.env.ANALYZE === "true"
				})
			]
		],
		nextConfig
	)
);
