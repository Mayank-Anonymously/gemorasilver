import { Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MobileMenu({ show, handleClose }) {
	const categories = [
		'Rings',
		'Earrings',
		'Pendants',
		'Mangalsutra',
		'Bracelets',
		'Set (Pendants + Earrings)',
		'Toe Rings',
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
							className='mobile-menu-category-item'
							onClick={() => console.log(`${category} clicked`)}>
							{category}
						</li>
					))}
				</ul>
			</Offcanvas.Body>
		</Offcanvas>
	);
}

export default MobileMenu;
