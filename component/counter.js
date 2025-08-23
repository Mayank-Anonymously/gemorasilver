'use client';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/counterSlice';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

const Counter = ({ handleRemoveFromCart }) => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className='d-flex justify-content-center my-4'>
			<div className='counter-box d-flex align-items-center px-3 py-2'>
				<button
					className='btn btn-link p-0 me-3 icon-btn'
					onClick={() => {
						dispatch(decrement());
						handleRemoveFromCart();
					}}
					aria-label='Decrement'>
					<FaTrashAlt size={18} />
				</button>

				<span className='count-text mx-2'>{count}</span>

				<button
					className='btn btn-link p-0 ms-3 icon-btn'
					onClick={() => dispatch(increment())}
					aria-label='Increment'>
					<FaPlus size={20} />
				</button>
			</div>
		</div>
	);
};

export default Counter;
