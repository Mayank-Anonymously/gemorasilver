import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFilter, FaSort } from 'react-icons/fa';

export default function FilterSortSection({ setShow }) {
	return (
		<div
			className='bg-light border-top p-3 d-flex justify-content-center gap-3 shadow-lg fixed-bottom'
			style={{ zIndex: 1050 }}>
			<Button
				onClick={() => setShow(true)}
				variant='outline'
				className='d-flex align-items-center gap-2 px-4 py-2 rounded-3'>
				<FaFilter size={18} />
				Filter
			</Button>

			<Button
				variant='outline'
				className='d-flex align-items-center gap-2 px-4 py-2 rounded-3'>
				<FaSort size={18} />
				Sort
			</Button>
		</div>
	);
}
