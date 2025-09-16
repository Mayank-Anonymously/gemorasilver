import { CiShoppingCart } from 'react-icons/ci';

const CartIcon = ({ count, handleShow }) => {
	return (
		<div
			style={{
				position: 'relative',
				display: 'inline-block',
				cursor: 'pointer',
			}}
			onClick={handleShow}>
			<CiShoppingCart
				size={25}
				color='#b66878'
			/>
			{count > 0 && (
				<span
					style={{
						position: 'absolute',
						top: '-8px',
						right: '-8px',
						background: '#ff0000',
						color: '#fff',
						borderRadius: '50%',
						padding: '2px 6px',
						fontSize: '12px',
						fontWeight: 'bold',
						lineHeight: 1,
					}}>
					{count}
				</span>
			)}
		</div>
	);
};

export default CartIcon;
