// next-sitemap.config.js
const fetchProducts = async () => {
	const res = await fetch('https://api.lunivajewels.com/products');
	const data = await res.json();
	return data.map((product) => `/products/${product.id}`);
};

module.exports = {
	siteUrl: 'https://www.lunivajewels.com',
	generateRobotsTxt: true,
	transform: async () => {
		const dynamicPaths = await fetchProducts();
		return [
			{ loc: '/', changefreq: 'daily', priority: 1.0 },
			...dynamicPaths.map((url) => ({
				loc: url,
				changefreq: 'weekly',
				priority: 0.8,
			})),
		];
	},
};
