import { Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MobileMenu({ show, handleClose }) {
	const categories = [
		{
			name: 'Bracelets',
			link: 'bracelet',
			count: 28,
			description: 'Explore our handcrafted bracelets made with love.',
			images: ['/assets/product/bracelet.png', '/assets/product/bracelet.png'],
		},

		{
			name: 'Rings',
			link: 'rings',
			count: 48,
			description: 'Explore our beautiful rings collection.',
			images: ['/assets/category/rings.png', '/assets/category/rings.png'],
		},
		{
			name: 'Earrings',
			link: 'earrings',
			count: 18,
			description: 'Find earrings to match every style.',
			images: [
				'/assets/category/earrings.png',
				'/assets/category/earrings.png',
			],
		},
		{
			name: 'Pendants',
			link: 'pendant',
			count: 14,
			description: 'Elegant pendants for every occasion.',
			images: ['/assets/category/pendant.png', '/assets/category/pendant.png'],
		},

		{
			name: 'Jewellery Set',
			link: 'jewellery-set',
			count: 13,
			description: 'Beautiful matching sets of pendants and earrings.',
			images: [
				'/assets/category/jewellery-set.png',
				'/assets/category/jewellery-set.png',
			],
		},
		{
			name: 'Necklace Set',
			link: 'necklace-set',
			count: 13,
			description: 'Beautiful matching sets of pendants and earrings.',
			images: [
				'/assets/category/necklace-set.png',
				'/assets/category/necklace-set.png',
			],
		},
		{
			name: 'Toe Rings',
			link: 'toe-ring',
			count: 13,
			description: 'Stylish toe rings for every occasion.',
			images: [
				'/assets/category/toe-rings.png',
				'/assets/category/toe-rings.png',
			],
		},
		{
			name: 'Anklets',
			link: 'anklet',
			count: 3,
			description: 'Stylish toe rings for every occasion.',
			images: ['/assets/category/anklet.png', '/assets/category/anklet.png'],
		},
	];

	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			placement='start'>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title
					className='fw-bold'
					style={{ color: '#6a2a42' }}>
					Shop by Category
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<ul className='mobile-menu-category list-unstyled m-0 p-0'>
					{categories.map((category, idx) => (
						<li
							key={idx}
							className='mobile-menu-category-item'>
							<a href={`/category/${category.link}`}>{category.name}</a>
						</li>
					))}
				</ul>
			</Offcanvas.Body>
		</Offcanvas>
	);
}

export default MobileMenu;
