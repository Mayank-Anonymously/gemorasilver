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

const Header = () => {
	const [show, setShow] = useState(false);
	const cartItems = useSelector((state) => state.cart.items);
	const handleShow = () => setShow(true);

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
							<a className='text-decoration-none  mx-2'>
								<BsPersonCircle
									size={25}
									color={'#b66878'}
								/>
							</a>
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
					<Navbar.Brand href='/'>
						<img
							src='/assets/logo.png'
							className='img-fluid logo'
						/>
					</Navbar.Brand>
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
		</>
	);
};

export default Header;
