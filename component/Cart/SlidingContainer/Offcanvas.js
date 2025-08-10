import React from 'react';
import { Offcanvas, Button, Image } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const CartOffcanvas = ({ show, handleClose, cartItems }) => {
	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.price * item.qty,
		0
	);
	const total = subtotal; // add shipping/tax logic if needed

	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			placement='end'
			className='listingcard'>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Shopping Cart</Offcanvas.Title>
			</Offcanvas.Header>

			<Offcanvas.Body>
				{cartItems.length === 0 ? (
					<p>Your cart is empty</p>
				) : (
					<>
						{cartItems.map((item, idx) => (
							<div
								key={idx}
								className='cart-item'>
								<Image
									src={item.image}
									rounded
									className='cart-image'
								/>
								<div className='cart-details'>
									<h6>{item.name}</h6>
									<p>
										{item.qty} × ${item.price.toFixed(2)}
									</p>
								</div>
								<Button
									variant='link'
									className='cart-remove'>
									<FaTrashAlt />
								</Button>
							</div>
						))}

						<div className='cart-summary'>
							<div className='d-flex justify-content-between'>
								<span>Subtotal</span>
								<strong>${subtotal.toFixed(2)}</strong>
							</div>
							<div className='d-flex justify-content-between'>
								<span>Total</span>
								<strong>${total.toFixed(2)}</strong>
							</div>
						</div>

						<div className='cart-buttons'>
							<Button
								variant='secondary'
								className='w-100 mb-2'>
								View Cart
							</Button>
							<Button
								variant='primary'
								className='w-100'>
								Checkout
							</Button>
						</div>
					</>
				)}
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default CartOffcanvas;
