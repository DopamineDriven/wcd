const withPlugins = require("next-compose-plugins");
// const withTypescript = require("@zeit/next-typescript");
// const withCSS = require("@zeit/next-css");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const nextRuntimeDotenv = require("next-runtime-dotenv");

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
	pageExtensions: ["json", "jsx", "js", "ts", "tsx"]
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
