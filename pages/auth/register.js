import React, { useState } from 'react';
import {
	FloatingLabel,
	Container,
	Row,
	Col,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { registerUser } from '@/component/redux/slices/authSlices';
import Screen from '@/component/common/Screen';

const RegisterScreen = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { message, user } = useSelector((state) => state.auth);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		dispatch(registerUser({ formData, router }));

		// router.push('/auth/verify-otp'); // After register → go to login
	};

	return (
		<Screen>
			<Container
				fluid
				style={{ minHeight: '100vh' }}>
				<Row>
					<Col
						md={7}
						xs={12}>
						<img
							src='/assets/journal/journal.png'
							className='img-fluid register-poster'
							style={{
								height: '100vh',
								width: '100%',
								objectFit: 'cover',
								marginLeft: -10,
							}}
						/>
					</Col>
					<Col md={5}>
						<div
							style={{
								height: '100vh',
								justifyContent: 'center',
								display: 'flex',
								flexDirection: 'column',
							}}>
							<Form
								onSubmit={handleSubmit}
								className='register-form'>
								<h2 className='mb-4 text-center fw-light'>
									Register with{' '}
									<em
										className='fw-medium'
										style={{ color: '#4c1d1d' }}>
										luniva
									</em>
								</h2>

								<FloatingLabel
									controlId='floatingName'
									label='Name'
									className='mb-3'>
									<Form.Control
										type='text'
										placeholder='Enter your name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
										className='rounded-3 shadow-sm'
									/>
								</FloatingLabel>

								<FloatingLabel
									controlId='floatingEmail'
									label='Email'
									className='mb-3'>
									<Form.Control
										type='email'
										placeholder='Enter your email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
										className='rounded-3 shadow-sm'
									/>
								</FloatingLabel>

								<FloatingLabel
									controlId='floatingPassword'
									label='Password'
									className='mb-4'>
									<Form.Control
										type='password'
										placeholder='Enter your password'
										name='password'
										value={formData.password}
										onChange={handleChange}
										required
										className='rounded-3 shadow-sm'
									/>
								</FloatingLabel>

								<Button
									type='submit'
									style={{
										background: '#4c1d1d',
										border: 'none',
										borderRadius: 0,
										height: 50,
									}}
									className='w-100 fw-semibold'>
									Submit
								</Button>

								<p className='text-center mt-3'>
									Already have an account?{' '}
									<a
										href='/login'
										className='fw-bold text-decoration-none'>
										Login
									</a>
								</p>
							</Form>
						</div>
					</Col>
				</Row>
			</Container>
		</Screen>
	);
};

export default RegisterScreen;
