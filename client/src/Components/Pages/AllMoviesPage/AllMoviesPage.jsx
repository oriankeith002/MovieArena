import './AllMoviesPage.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const AllMoviesPage = () => {
	const [moviesLoaded, setMoviesLoaded]	 = useState(false);
	const [allMovies , setAllMovies] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	
	const [sortOrder, setSortOrder]  = useState('');
	const [sortBy, setSortBy] = useState('');
	
	//handling pagination
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(8);
	const [totalPages, setTotalPages] = useState(1);


	// const queryParameters  = {
	// 	searchQuery,
	// 	sortTitleOrder,
	// 	sortReleaseYearOrder,
	// }

	useEffect(() => {
		try {

			// let isFetching = true;

			// if (!allMovies) {

				// axios.get(`/movies/allmovies?title=${searchQuery}&sort=${sortOrder}&sort_by=${sortBy}&page=${page}&limit=${perPage}`)

				const queryParams = new URLSearchParams();
				if (searchQuery) {
					queryParams.append('title', searchQuery);
				}

				if (sortOrder && sortBy) {
					queryParams.append('sortOrder',sortOrder);
					queryParams.append('sortBy', sortBy);
				}

				queryParams.append('page', page.toString());
				queryParams.append('limit', perPage.toString()); 

				

				console.log('---------------')
				console.log(queryParams)
				console.log('---------------')


				axios.get(`/movies/allmovies?${queryParams.toString()}`).then(({data}) => {
					setAllMovies(data)
					setMoviesLoaded(true)
					setTotalPages(data.totalPages)
					// if (isFetching) {
					// 	setAllMovies(data);
					// 	setMoviesLoaded(true);
					// 	setTotalPages(data.totalPages);
					// }
				})
			// }

			// return () => {
			// 	isFetching = false;
			// }

		} catch(error) {
			console.log(error);
		}
	},[searchQuery,sortOrder,sortBy, page,perPage]) 

	console.log(allMovies); 

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value)
	}	


	const handleSortByChange = (event) => {
		setSortBy(event.target.value);
	}


	const handleSortOrderChange = (event) => {
		setSortOrder(event.target.value);
	}


	const handlePageChange = (newPage) => {
		setPage(newPage);
	}



	if (!moviesLoaded) {
		return (<div>Loading .... </div>)
	}


	return (
			<div className='all-movie-container'>
				AllMoviesPage
				<div className='search-component'>
					<input 
						className='search-box'
						type='text'
						value={searchQuery}
						onChange={handleSearchChange}
						placeholder='Search movies here'
					/>
				</div>
				<div className='sorting-line'>
					<div className='sort-by-title-or-rYear'>
						<label htmlFor='sort'>Sort By:</label>
						<select id='sort' value={sortBy} onChange={handleSortByChange}>
							<option value="">None</option>
							<option value="title">Title</option>
							<option value="releaseYear">Release Year</option>
						</select>
					</div>
					<div className='order-results'>
						<label htmlFor='order'>Order</label>
						<select id='sort' value={sortOrder} onChange={handleSortOrderChange}>
							<option value="">None</option>
							<option value="asc">A - Z</option>
							<option value="desc">Z - A</option>
						</select>
					</div>
				</div> 


				{/* Pagination controls  */}
				<div>
					{ page > 1 && (
						<button onClick={() => handlePageChange(page - 1)}>Previous</button>
					)} 
					{ page < totalPages && (
						<button onClick={() => handlePageChange(page + 1)}> Next </button>
					)}
				</div>

			</div>
	)
}

export default AllMoviesPage