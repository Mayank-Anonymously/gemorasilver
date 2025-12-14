const axios = require('axios');

const SITE_URL = 'https://www.lunivajewels.com';
const API = 'https://www.lunivajewels.com/api'; // change if needed

async function getDynamicPaths() {
	try {
		const [productsRes, collectionsRes, categoriesRes] = await Promise.all([
			axios.get(`${API}/product/getAllProducts`),
			// axios.get(`${API}/collection/getAllCollections`),
			// axios.get(`${API}/category/getAllCategories`),
		]);

		const products = productsRes.data.response || [];
		const collections = collectionsRes.data?.response || [];
		const categories = categoriesRes.data?.response || [];

		return [
			// ✅ Product pages
			...products.map((p) => ({
				loc: `/product/${p._id}`,
				changefreq: 'weekly',
				priority: 0.8,
			})),

			// // ✅ Collection pages
			// ...collections.map((c) => ({
			// 	loc: `/product/collection/${c.collectionname}`,
			// 	changefreq: 'weekly',
			// 	priority: 0.7,
			// })),

			// // ✅ Category pages
			// ...categories.map((cat) => ({
			// 	loc: `/category/${cat.name}`,
			// 	changefreq: 'weekly',
			// 	priority: 0.7,
			// })),
		];
	} catch (error) {
		console.error('Sitemap API Error:', error.message);
		return [];
	}
}

module.exports = {
	siteUrl: SITE_URL,
	generateRobotsTxt: true,
	sitemapSize: 5000,

	exclude: [
		'/auth/*',
		'/user/*',
		'/order/*',
		'/api/*',
		'/product/checkout',
		'/product/proceed-to-payment',
	],

	async additionalPaths() {
		const dynamicPaths = await getDynamicPaths();

		return [
			// ✅ Shop listing page (VERY IMPORTANT)
			{
				loc: '/listing/shop',
				changefreq: 'daily',
				priority: 0.9,
			},

			// ✅ Dynamic pages
			...dynamicPaths,
		];
	},

	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
				disallow: [
					'/auth',
					'/user',
					'/order',
					'/api',
					'/product/checkout',
					'/product/proceed-to-payment',
				],
			},
		],
	},
};
