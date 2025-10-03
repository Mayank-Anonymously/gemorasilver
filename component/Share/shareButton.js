import React from 'react';
import { LuShare2 } from 'react-icons/lu';

const ShareButton = ({ title, text, url }) => {
	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: title,
					text: text,
					url: url,
				});
				console.log('Article shared successfully!');
			} catch (err) {
				console.error('Error sharing:', err);
			}
		} else {
			alert('Sharing is not supported on this browser.');
		}
	};

	return (
		<button
			className='btn'
			onClick={handleShare}>
			<LuShare2 />
		</button>
	);
};

export default ShareButton;
