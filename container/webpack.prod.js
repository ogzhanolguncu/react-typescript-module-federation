const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
	entry: "./src/index.ts",
	mode: "development",
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				app1: "app1@http://ogz-microfrontend-app-1.s3-website.eu-central-1.amazonaws.com/remoteEntry.js",
				app2: "app2@http://ogz-microfrontend-app-2.s3-website.eu-central-1.amazonaws.com/remoteEntry.js",
			},
			shared: {
				...deps,
				react: { singleton: true, eager: true, requiredVersion: deps.react },
				"react-dom": {
					singleton: true,
					eager: true,
					requiredVersion: deps["react-dom"],
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
