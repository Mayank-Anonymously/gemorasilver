import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';

const FloatingWhatsAppButton = () => {
	return (
		<a
			href='https://wa.me/+918923250822' // Replace with your WhatsApp number
			target='_blank'
			rel='noopener noreferrer'
			className='floating-whatsapp-btn'>
			<FaWhatsapp size={28} />
		</a>
	);
};

export default FloatingWhatsAppButton;
