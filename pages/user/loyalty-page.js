import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { HOST } from '@/component/apibaseurl';
import Screen from '@/component/common/Screen';

const Loyalty = ({}) => {
	const { user } = useSelector((state) => state.auth);
	const [purchaseCount, setPurchaseCount] = useState(0);
	const [remaining, setRemaining] = useState(6);
	const [eligible, setEligible] = useState(false);
	const userId = user?._id;
	useEffect(() => {
		axios
			.get(`${HOST}loyalty/${userId} `)
			.then((res) => {
				setPurchaseCount(res.data.purchaseCount);
				setRemaining(res.data.remaining);
				setEligible(res.data.eligible);
			})
			.catch((err) => console.error(err));
	}, [userId]);

	const progress = (purchaseCount / 6) * 100;

	return (
		<Screen>
			<div style={styles.container}>
				<h1 style={styles.title}>Your Loyalty Progress</h1>
				<p style={styles.info}>Purchases made: {purchaseCount} / 6</p>

				<div style={styles.progressContainer}>
					<div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
				</div>

				<p style={styles.remaining}>
					{eligible
						? '🎉 You are eligible for a free product!'
						: `${remaining} more purchase(s) to unlock your reward`}
				</p>
			</div>
		</Screen>
	);
};

const styles = {
	container: {
		maxWidth: '500px',
		margin: '50px auto',
		textAlign: 'center',
		fontFamily: 'Arial, sans-serif',
	},
	title: { color: '#800000', fontSize: '2rem', marginBottom: '20px' },
	info: { fontSize: '1.2rem', marginBottom: '10px' },
	progressContainer: {
		height: '25px',
		backgroundColor: '#f1f1f1',
		borderRadius: '12px',
		overflow: 'hidden',
		marginBottom: '20px',
	},
	progressBar: {
		height: '100%',
		backgroundColor: '#800000',
		borderRadius: '12px',
		transition: 'width 0.3s ease',
	},
	remaining: { fontSize: '1rem', color: '#800000', fontWeight: '600' },
};

export default Loyalty;
