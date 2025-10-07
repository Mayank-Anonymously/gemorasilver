import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import {
	addTowishlistApi,
	fetchwishlist,
	removeFromwishlistApi,
} from '@/component/redux/thunk/wishlistThunkApi';
import { useDispatch, useSelector } from 'react-redux';
import Screen from '@/component/common/Screen';
import { HOST } from '@/component/apibaseurl';
import Link from 'next/link';

const Wishlist = () => {
	const wishlistData = useSelector((state) => state.wishlist.wishlistitems);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	// Calculate total from priceSale
	const total = wishlistData.reduce(
		(sum, item) => sum + (item.priceSale || 0),
		0
	);

	const userId = user?._id;

	useEffect(() => {
		fetchwishlist({ userId, dispatch });
	}, []);

	return (
		<Screen>
			<Container className='my-5'>
				<h2
					className='text-center fw-bold mb-4'
					style={{ color: '#800000' }}>
					My Wishlist
				</h2>

				<Row className='g-4'>
					{wishlistData.length > 0 ? (
						wishlistData.map((product) => (
							<Col
								key={product.id}
								xs={12}
								sm={6}
								md={4}
								lg={3}>
								<Link
									href={`/product/${product._id}`}
									className='text-decoration-none'>
									<Card
										className='h-100 shadow-sm'
										style={{
											border: '1px solid #f3f3f3',
											borderRadius: '12px',
										}}>
										<div className='position-relative'>
											<img
												src={`${HOST}resources/${product.image}`}
												alt={product.title}
												width={300}
												height={300}
												className='card-img-top p-3'
												style={{
													objectFit: 'contain',
													borderRadius: '12px',
												}}
											/>
										</div>
										<Card.Body>
											<Card.Title
												className='fw-semibold'
												style={{ color: '#800000' }}>
												{product.title}
											</Card.Title>
											<Card.Text style={{ fontSize: '0.9rem' }}>
												{product.description
													.substring(0, 80)
													.replaceAll('<p>', '')}
												...
											</Card.Text>

											<div className='d-flex justify-content-between align-items-center mt-3'>
												<div>
													<span
														className='fw-bold'
														style={{ color: '#800000' }}>
														₹{product.priceSale.toLocaleString()}
													</span>
													{product.price && (
														<small className='text-muted ms-2 text-decoration-line-through'>
															₹{product.price.toLocaleString()}
														</small>
													)}
												</div>
												<Button
													variant='outline'
													onClick={() =>
														removeFromwishlistApi(userId, product._id, dispatch)
													}
													style={{
														backgroundColor: '#800000',
														color: '#fff',
														borderRadius: '8px',
													}}>
													Remove
												</Button>
											</div>
										</Card.Body>
									</Card>
								</Link>
							</Col>
						))
					) : (
						<p className='text-center text-muted'>Your wishlist is empty </p>
					)}
				</Row>

				{wishlistData.length > 0 && (
					<div
						className='mt-5 text-end fw-bold fs-5'
						style={{
							color: '#800000',
							borderTop: '2px solid #800000',
							paddingTop: '15px',
						}}>
						Total: ₹{total.toLocaleString()}
					</div>
				)}
			</Container>
		</Screen>
	);
};

export default Wishlist;
