import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { BsPersonCircle } from 'react-icons/bs';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import ResponsiveExample from '../Cart/SlidingContainer/Offcanvas';

const Header = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);

	const cartItems = [
		{ name: 'Product 1', qty: 1, price: 49.99, image: '/assets/product1.jpg' },
		{ name: 'Product 2', qty: 2, price: 19.99, image: '/assets/product2.jpg' },
	];
	return (
		<>
			<Navbar
				expand='lg'
				className='justify-content-center'
				style={{ height: '80px' }}>
				<Container>
					<Navbar.Brand href='/'>
						<img
							src='/assets/logo.png'
							className='img-fluid logo'
						/>
					</Navbar.Brand>

					<Navbar.Brand>
						<a className='text-decoration-none mx-2'>
							<CiSearch
								size={25}
								color='white'
							/>
						</a>
						<a className='text-decoration-none  mx-2'>
							<CiShoppingCart
								size={25}
								color='white'
								onClick={handleShow}
							/>
						</a>
						<a className='text-decoration-none  mx-2'>
							<BsPersonCircle
								size={25}
								color='white'
							/>
						</a>
					</Navbar.Brand>
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
