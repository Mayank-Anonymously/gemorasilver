// components/SearchOverlay.js
import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

import axios from 'axios';
import debounce from 'lodash.debounce';
import { HOST } from '@/component/apibaseurl';
import Screen from '@/component/common/Screen';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

const SearchOverlay = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	// Debounced API call
	const fetchResults = debounce(async (searchTerm) => {
		if (!searchTerm) {
			setResults([]);
			return;
		}
		setLoading(true);
		try {
			const { data } = await axios.get(
				`${HOST}product/auto-complete/${searchTerm}`
			);
			setResults(data);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	}, 500);
	console.log('data::', query);
	return (
		<Screen>
			<Container className='bg-white mt-5'>
				<div
					className='search-bar'
					onClick={() => setIsOpen(true)}>
					<FaSearch />
					<input
						type='text'
						placeholder='Search products...'
						readOnly
					/>
				</div>

				{/* Full-screen overlay */}
				{isOpen && (
					<div className='search-overlay'>
						<div className='search-header'>
							<input
								type='text'
								autoFocus
								placeholder='Type to search...'
								onChange={(e) => {
									fetchResults(e.target.value);
									setQuery(e.target.value);
								}}
							/>
							<button
								onClick={() => {
									window.location.href = `/category/${query}`;
									setIsOpen(false);
								}}>
								<FaSearch />
							</button>
						</div>

						<div className='search-results'>
							{loading ? (
								<p>Loading...</p>
							) : results.length ? (
								results.map((item) => {
									return (
										<Link
											href={`/product/${item._id}`}
											className='text-decoration-none text-white'>
											<div
												key={item._id}
												className='search-item'>
												<img
													src={`${HOST}resources/${item.images[0]}`}
													alt={item.title}
												/>
												<div>
													<h6>{item.title}</h6>
													<p>{item.categoryName}</p>
												</div>
											</div>
										</Link>
									);
								})
							) : (
								<p>No results found.</p>
							)}
						</div>
					</div>
				)}
			</Container>
		</Screen>
	);
};

export default SearchOverlay;
