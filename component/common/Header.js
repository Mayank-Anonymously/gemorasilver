import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { BsPersonCircle } from 'react-icons/bs';
import { BsFilterLeft } from 'react-icons/bs';
import { useState } from 'react';
import ResponsiveExample from '../Cart/SlidingContainer/Offcanvas';
import { useSelector } from 'react-redux';
import CartIcon from './CartIcon';
import { Offcanvas } from 'react-bootstrap';
import MobileMenu from '../menu/MobileMenu';
import { useRouter } from 'next/navigation';

const Header = () => {
	const [show, setShow] = useState(false);
	const [showSideMenu, setShowSideMenu] = useState(false);
	const router = useRouter();
	const cartItems = useSelector((state) => state.cart.items);
	const handleShow = () => setShow(true);
	const auth = useSelector((state) => state.auth);

	return (
		<>
			<Navbar
				expand='lg'
				// className='justify-content-center'
				style={{ height: '100px' }}>
				<Container
					fluid
					className='desktop'>
					<div className='laptop-menu'>
						<Nav.Link
							href='/'
							className='nav-animate'>
							Home
						</Nav.Link>
						<Nav.Link
							href='/about'
							className='nav-animate'>
							About Us
						</Nav.Link>
					</div>
					<Navbar.Brand
						href='/'
						style={{ marginLeft: '103px' }}>
						<img
							src='/assets/logo.png'
							className='img-fluid logo'
						/>
					</Navbar.Brand>
					<div className='laptop-menu'>
						<Navbar.Brand>
							<a className='text-decoration-none mx-2'>
								<CiSearch
									size={25}
									color={'#b66878'}
								/>
							</a>
							<a className='text-decoration-none  mx-2'>
								<CartIcon
									count={cartItems.length}
									handleShow={handleShow}
								/>
							</a>
							{auth.loggedIn === false && (
								<a
									onClick={() => router.push('/auth/login')}
									className='text-decoration-none  mx-2 '>
									<BsPersonCircle
										size={25}
										color={'#b66878'}
										className='cursor-pointer'
									/>
								</a>
							)}
						</Navbar.Brand>
						<Nav.Link
							href='/contact-us'
							className='nav-animate'>
							Contact Us
						</Nav.Link>
						<Nav.Link
							href='/track-my-order'
							className='nav-animate'>
							Track My Order
						</Nav.Link>
					</div>
				</Container>

				<Container
					fluid
					className='mobile-desktop-menu'>
					<div className='mt-3 p-1'>
						<BsFilterLeft
							size={40}
							onClick={() => setShowSideMenu(true)}
						/>
						<Navbar.Brand href='/'>
							<img
								src='/assets/logo.png'
								className='logo'
							/>
						</Navbar.Brand>

						<a className='text-decoration-none  mx-2'>
							<CartIcon
								count={cartItems.length}
								handleShow={handleShow}
							/>
						</a>
					</div>

					<div className='mobile-menu'>
						<Nav.Link
							href='/'
							className='nav-animate'>
							Home
						</Nav.Link>
						<Nav.Link
							href='/about'
							className='nav-animate'>
							About Us
						</Nav.Link>
						<Nav.Link
							href='/contact-us'
							className='nav-animate'>
							Contact Us
						</Nav.Link>
						<Nav.Link
							href='/track-my-order'
							className='nav-animate'>
							Track My Order
						</Nav.Link>
					</div>
				</Container>
			</Navbar>

			{show && (
				<ResponsiveExample
					show={show}
					handleClose={() => setShow(false)}
					cartItems={cartItems}
				/>
			)}

			{showSideMenu && (
				<MobileMenu
					show={showSideMenu}
					handleClose={() => setShowSideMenu(false)}
				/>
			)}
		</>
	);
};

export default Header;
