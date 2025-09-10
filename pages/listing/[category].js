import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Screen from '@/component/common/Screen';
import FiltersSidebar from '@/component/Filterr/Sidebar';
import { products } from '@/component/data/products';
import ProductCard from '@/component/listingProductCard';

const ProductsPage = () => {
	const categories = [...new Set(products.map((p) => p.category))];
	const dietaryNeeds = [...new Set(products.flatMap((p) => p.dietary))];
	const topRated = products.filter((p) => p.rating >= 4);

	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedDietary, setSelectedDietary] = useState([]);
	const [priceRange, setPriceRange] = useState({ from: '', to: '' });

	const filteredProducts = products.filter((p) => {
		const categoryMatch =
			selectedCategories.length === 0 ||
			selectedCategories.includes(p.category);
		const dietaryMatch =
			selectedDietary.length === 0 ||
			p.dietary.some((d) => selectedDietary.includes(d));
		const priceMatch =
			(!priceRange.from || p.price >= parseFloat(priceRange.from)) &&
			(!priceRange.to || p.price <= parseFloat(priceRange.to));
		return categoryMatch && dietaryMatch && priceMatch;
	});

	return (
		<Screen>
			<Container
				fluid
				className='py-4'>
				<Row>
					{/* Sidebar */}
					<Col md={3}>
						<FiltersSidebar
							categories={categories}
							selectedCategories={selectedCategories}
							setSelectedCategories={setSelectedCategories}
							dietaryNeeds={dietaryNeeds}
							selectedDietary={selectedDietary}
							setSelectedDietary={setSelectedDietary}
							priceRange={priceRange}
							setPriceRange={setPriceRange}
							topRated={topRated}
						/>
					</Col>

					{/* Products */}
					<Col md={9}>
						<Row
							xs={1}
							sm={2}
							md={3}
							className='g-4'>
							{filteredProducts.map((p) => (
								<Col key={p.id}>
									<ProductCard product={p} />
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>

			{/*  */}
		</Screen>
	);
};

export default ProductsPage;
