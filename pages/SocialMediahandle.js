import {
	FaInstagram,
	FaFacebookF,
	FaYoutube,
	FaLinkedinIn,
} from 'react-icons/fa';

export default function SocialMediaSection() {
	return (
		<section className='py-5 bg-light'>
			<div className='container text-center'>
				<h3
					className='fw-bold mb-4'
					style={{ color: '#812d3e' }}>
					Connect With Us
				</h3>
				<div className='d-flex justify-content-center gap-4 flex-wrap'>
					<a
						href='https://www.instagram.com/luniva_jewels_?utm_source=qr&igsh=MWRzYXM1bzVrZTBhYg=='
						target='_blank'
						rel='noopener noreferrer'
						className='d-flex flex-column align-items-center text-decoration-none'>
						<FaInstagram
							size={40}
							color='#812d3e'
						/>
						<span
							className='mt-2 fw-semibold'
							style={{ color: '#812d3e' }}>
							Instagram
						</span>
					</a>

					<a
						href='https://www.facebook.com/share/1MTLgmQzLP/'
						target='_blank'
						rel='noopener noreferrer'
						className='d-flex flex-column align-items-center text-decoration-none'>
						<FaFacebookF
							size={40}
							color='#812d3e'
						/>
						<span
							className='mt-2 fw-semibold'
							style={{ color: '#812d3e' }}>
							Facebook
						</span>
					</a>

					<a
						href='https://youtube.com/@lunivajewels?si=2L1Lc3v0efdKdkgi'
						target='_blank'
						rel='noopener noreferrer'
						className='d-flex flex-column align-items-center text-decoration-none'>
						<FaYoutube
							size={40}
							color='#812d3e'
						/>
						<span
							className='mt-2 fw-semibold'
							style={{ color: '#812d3e' }}>
							YouTube
						</span>
					</a>

					<a
						href='https://www.linkedin.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='d-flex flex-column align-items-center text-decoration-none'>
						<FaLinkedinIn
							size={40}
							color='#812d3e'
						/>
						<span
							className='mt-2 fw-semibold'
							style={{ color: '#812d3e' }}>
							LinkedIn
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
