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

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Navbar
				expand='lg'
				className='justify-content-center'
				style={{ height: '100px' }}>
				<Container>
					<Navbar.Brand href='#home'>GEMORA Silver BY M&A</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<div className='mx-auto'>
							<Nav className='justify-content-center'>
								<Nav.Link href='#home'>Home</Nav.Link>
								<Nav.Link href='#link'>Shop</Nav.Link>
								<Nav.Link href='#link'>Blog</Nav.Link>
								<Nav.Link href='#link'>Contact</Nav.Link>
								<Nav.Link href='#link'>Explore</Nav.Link>

								{/* <NavDropdown
								title='Dropdown'
								id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									Separated link
								</NavDropdown.Item>
							</NavDropdown> */}
							</Nav>
						</div>
					</Navbar.Collapse>
					<Navbar.Brand>
						<a className='text-decoration-none mx-2'>
							<CiSearch
								size={25}
								color='black'
							/>
						</a>
						<a className='text-decoration-none  mx-2'>
							<CiShoppingCart
								size={25}
								color='black'
								onClick={handleShow}
							/>
						</a>
						<a className='text-decoration-none  mx-2'>
							<BsPersonCircle
								size={25}
								color='black'
							/>
						</a>
					</Navbar.Brand>
				</Container>
			</Navbar>
			{show && (
				<ResponsiveExample
					show={show}
					handleClose={handleClose}
				/>
			)}
		</>
	);
};

export default Header;
