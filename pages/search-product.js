// components/SearchOverlay.js
import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { HOST } from '@/component/apibaseurl';
import Screen from '@/component/common/Screen';

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
				`${HOST}/product/auto-complete/${searchTerm}`
			);
			setResults(data);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	}, 500);

	useEffect(() => {
		fetchResults(query);

		return () => fetchResults.cancel();
	}, [query]);

	return (
		<Screen>
			<Container className='bg-white'>
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
								value={query}
								onChange={(e) => setQuery(e.target.value)}
							/>
							<button onClick={() => setIsOpen(false)}>
								<FaTimes />
							</button>
						</div>

						<div className='search-results'>
							{loading ? (
								<p>Loading...</p>
							) : results.length ? (
								results.map((item) => (
									<div
										key={item._id}
										className='search-item'>
										<img
											src={item.image[0]}
											alt={item.title}
										/>
										<div>
											<h4>{item.title}</h4>
											<p>{item.category}</p>
										</div>
									</div>
								))
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
