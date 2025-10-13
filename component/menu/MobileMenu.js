import { Offcanvas } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthState, logoutUser } from '../redux/slices/authSlices';
import { useRouter } from 'next/navigation';

function MobileMenu({ show, handleClose }) {
	const dispatch = useDispatch();
	const router = useRouter();
	const { user } = useSelector((state) => state.auth);

	const userId = user?._id;
	const categories = [
		{
			name: 'Bracelets',
			link: 'bracelet',
			count: 23,
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
			link: 'pendent',
			count: 22,
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
	const mobileMenuLoggedInOptions = [
		{
			id: 3,
			name: 'Contact Us',
			link: '/contact-us',
		},
		{
			id: 3,
			name: 'About Us',
			link: '/about',
		},
		{
			id: 3,
			name: 'My Orders',
			link: '/user/my-orders',
		},
		{
			id: 3,
			name: 'My Saved Address',
			link: '/user/my-saved-address',
		},
		{
			id: 3,
			name: 'Logout',
			link: '#',
		},
	];
	const mobileMenuLoggedOutOptions = [
		{
			id: 3,
			name: 'Contact Us',
			link: '/contact-us',
		},
		{
			id: 3,
			name: 'About Us',
			link: '/about',
		},

		{
			id: 3,
			name: 'Login',
			link: '',
		},
	];

	const handleLogout = () => {
		dispatch(clearAuthState());

		handleClose();
	};

	const handleLogin = () => {
		router.push('/auth/login');
	};
	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			placement='start'>
			<Offcanvas.Header closeButton></Offcanvas.Header>
			<Offcanvas.Body>
				<Accordion alwaysOpen>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>
							<h6
								className='fw-bold m-0'
								style={{ color: '#6a2a42' }}>
								Shop by Category
							</h6>
						</Accordion.Header>
						<Accordion.Body>
							<ul className='list-unstyled m-0 p-0'>
								{categories.map((category, idx) => (
									<li
										key={idx}
										className='mobile-menu-category-item'>
										<Link
											href={`/category/${category.link}`}
											className='text-decoration-none'
											style={{ color: '#6a2a42' }}>
											{category.name}
										</Link>
									</li>
								))}
							</ul>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>

				{userId ? (
					<ul className='mobile-menu-category list-unstyled m-0 p-0'>
						{mobileMenuLoggedInOptions.map((menu, idx) => (
							<Link
								onClick={() => menu.name === 'Logout' && handleLogout()}
								href={menu.link}
								className='text-decoration-none'
								style={{ color: '#6a2a42' }}>
								<li
									key={idx}
									className='mobile-menu-category-item'>
									{menu.name}
								</li>
							</Link>
						))}
					</ul>
				) : (
					<ul className='mobile-menu-category list-unstyled m-0 p-0'>
						{mobileMenuLoggedOutOptions.map((menu, idx) => (
							<Link
								onClick={() => menu.name === 'Login' && handleLogin()}
								href={menu.link}
								className='text-decoration-none'
								style={{ color: '#6a2a42' }}>
								<li
									key={idx}
									className='mobile-menu-category-item'>
									{menu.name}
								</li>
							</Link>
						))}
					</ul>
				)}
			</Offcanvas.Body>
		</Offcanvas>
	);
}

export default MobileMenu;
