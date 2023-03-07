/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn2.thecatapi.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn1.thecatapi.com',
			}
		]
	}
};

module.exports = nextConfig;
