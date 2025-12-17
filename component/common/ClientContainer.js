// components/ClientToast.js
'use client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ClientToast() {
	return (
		<ToastContainer
			position='top-right'
			theme='dark'
			autoClose={3000}
		/>
	);
}
