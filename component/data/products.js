// /data/products.js
export const products = [
	{
		id: 'ring-0001',
		title: 'Classic Solitaire Ring',
		sku: 'ETR-CL-0001',
		category: 'ring',
		brand: 'Luniva',
		price: 1999.0,
		compare_at_price: 2999.0,
		currency: 'INR',
		status: 'active',
		images: ['/assets/product/rings/DSC02144.png'],
		description:
			'Timeless solitaire design with a brilliant-cut stone. Available in multiple metals and stones.',
		variants: [
			{
				variant_id: 'ETR-CL-0001-G-6-D',
				title: '14K Gold / Size 6 / Diamond',

				inventory_quantity: 5,
			},
			{
				variant_id: 'ETR-CL-0001-S-7-CZ',
				title: 'Sterling Silver / Size 7 / Cubic Zirconia',

				inventory_quantity: 12,
			},
		],
		tags: ['solitaire', 'engagement', 'wedding', 'gift'],
	},
	{
		id: 'ring-0002',
		title: 'Halo Engagement Ring',
		sku: 'AUR-HALO-0002',
		category: 'ring',
		brand: 'Luniva',
		price: 999.0,
		compare_at_price: 1999.0,
		currency: 'INR',
		status: 'active',
		images: ['/assets/product/rings/DSC02147.png'],
		description:
			'A dazzling halo setting surrounds the center stone with smaller accent stones for extra sparkle.',
		variants: [
			{
				variant_id: 'AUR-HALO-0002-RG-7-M',
				title: '14K Rose Gold / Size 7 / Moissanite',
				inventory_quantity: 8,
			},
			{
				variant_id: 'AUR-HALO-0002-WG-6-D',
				title: 'White Gold / Size 6 / Diamond',
				inventory_quantity: 4,
			},
		],
		tags: ['halo', 'engagement', 'sparkle', 'diamond'],
	},
	{
		id: 'ring-0003',
		title: 'Knot Promise Ring',
		sku: 'INF-KNOT-0003',
		category: 'ring',
		brand: 'Luniva',
		price: 999.0,
		compare_at_price: 1999.0,
		currency: 'INR',
		status: 'active',
		images: ['/assets/product/rings/DSC02156.png'],
		description:
			'Symbol of eternal love — polished infinity knot design, perfect as a promise ring.',
		variants: [
			{
				variant_id: 'INF-KNOT-0003-S-6',
				title: 'Sterling Silver / Size 6',
				inventory_quantity: 20,
			},
			{
				variant_id: 'INF-KNOT-0003-G-7',
				title: '14K Gold / Size 7',
				inventory_quantity: 10,
			},
		],
		tags: ['promise ring', 'infinity', 'gift'],
	},
	{
		id: 'ring-0004',
		title: 'Vintage Emerald Ring',
		sku: 'RV-EM-0004',
		category: 'ring',
		brand: 'Luniva',
		price: 2999.0,
		compare_at_price: 3999.0,
		currency: 'INR',
		status: 'active',
		images: ['/assets/product/rings/DSC02166.png'],
		description:
			'Vintage-inspired emerald centerpiece with intricate band detailing.',
		variants: [
			{
				variant_id: 'RV-EM-0004-YG-7-E',
				title: 'Yellow Gold / Size 7 / Emerald',
				inventory_quantity: 6,
			},
			{
				variant_id: 'RV-EM-0004-WG-8-E',
				title: 'White Gold / Size 8 / Emerald',
				inventory_quantity: 3,
			},
		],
		tags: ['vintage', 'emerald', 'luxury'],
	},
	{
		id: 'ring-0005',
		title: 'Minimalist Band Ring',
		sku: 'MIN-BND-0005',
		category: 'ring',
		brand: 'Minimal',
		price: 1999.0,
		compare_at_price: 2999.0,
		currency: 'INR',
		status: 'active',
		images: ['/assets/product/rings/DSC02130.png'],
		description:
			'Sleek and modern plain band design, perfect for daily wear or stacking.',
		variants: [
			{
				variant_id: 'MIN-BND-0005-S-7',
				title: 'Sterling Silver / Size 7',
				inventory_quantity: 50,
			},
			{
				variant_id: 'MIN-BND-0005-G-8',
				title: 'Gold Plated / Size 8',
				inventory_quantity: 30,
			},
		],
		tags: ['band', 'minimal', 'stackable', 'daily wear'],
	},
];
